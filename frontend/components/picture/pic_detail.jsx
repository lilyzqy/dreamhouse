import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import SignupFormContainer from '../session_form/signup_form_container';


class PicDetail extends React.Component {
  constructor(){
    super();
    this.state = {
      modalOn: false
    };
  }

  openModal() {
   this.setState({modalOn: true});
  }

  closeModal() {
    return ()=> this.setState({modalOn: false});
  }

  componentWillMount(){
    let test = this;
    this.props.fetchPicture(this.props.match.params.picId).then(()=>{
      test.props.fetchUser(test.props.picture.user_id).then(()=>{
        test.props.fetchProject(test.props.picture.project_id);
      });
    });
  }

  handleClick(type){
    return ()=>{
      if (type === "favorite"){
        if(this.props.currentUser){
          this.props.createFavorite(this.props.picture.id);
        }else{
          this.openModal();
        }
      }else{
        this.props.deleteFavorite(this.props.picture.id);
      }
    };
  }

  render(){
    const pic = this.props.picture;
    if(!pic){
      return (<div></div>);
    }
    const user = this.props.users[pic.user_id];
    const project = this.props.projects[pic.project_id];
    if(!user || !project){
      return (<div></div>);
    }
    let type = 'favorite';
    let heartType = "fa-heart-o";
    if(pic.favorited_by_current_user){
      type = "unfavorite";
      heartType = "fa-heart";
    }
    return (
      <div className="picdetail">
        <div className='up'>
          <img src={pic.image_url}></img>
          <div className="pic-bottom">
            <a className="like-button" onClick={this.handleClick(type)}>
              <i className={`fa ${heartType}`} aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className='bottom'>
          <div className='bottom-left'>
            <h3>Project Information</h3>
            <p>
              location: {project.city} {project.state}
            </p>
          </div>
          <div className='bottom-right'>
            <img src={user.image_url} ></img>
            <div>
              <h3>{user.username}</h3>
              <Link to={`/users/${user.id}/projects`} >See More Projects from This Designer</Link>
            </div>
          </div>
        </div>
        <Modal
          isOpen={ this.state.modalOn}
          onRequestClose={ this.closeModal()}
          backDropClosesModal={ true }
          className={"modal-show"}
          overlayClassName={"model-background"}>
          <p>Love the design? Don't let the inspiration slip away! Join us Today!</p>
          <SignupFormContainer closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default PicDetail;
