import React from 'react';
import { Link } from 'react-router-dom';
import ProjectDetailItemsContainer from './project_detail_items_container';
import Modal from 'react-modal';
import NewPictureFormContainer from '../picture/new_picture_form_container';
import SignupFormContainer from '../session_form/signup_form_container';


class ProjectDetail extends React.Component {
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
    this.props.fetchProject(this.props.match.params.projectId).then(this.props.fetchPictures());
  }

  handleClick(id){
    return ()=> this.props.deleteProject(id).then(()=>this.props.history.push('/profile'));
  }

  render(){
    let project = this.props.project;
    if(!project){
      return (<div></div>);
    }
    let link;
    let deleteLink;
    let modal = <Modal
                  isOpen={ this.state.modalOn}
                  onRequestClose={ this.closeModal()}
                  backDropClosesModal={ true }
                  className={"modal-show"}
                  overlayClassName={"model-background"}>
                  <p>Love the design? Don't let the inspiration slip away! Join us Today!</p>
                  <SignupFormContainer closeModal={this.closeModal}/>
                </Modal>;
    if(this.props.currentUser && this.props.currentUser.id === project.user_id){
      link =
        <a className="addPic" onClick={()=>this.openModal()}>
        <i className="fa fa-plus" aria-hidden="true"></i>
        Add New Picture To the Project</a>;
      deleteLink =
        <a onClick={this.handleClick(project.id)}>
        <i className="fa fa-trash" aria-hidden="true"></i>
        Delete This Project</a>;
      modal= <Modal
        isOpen={ this.state.modalOn }
        onRequestClose={ this.closeModal()}
        backDropClosesModal={ true }
        className={"modal-show"}
        overlayClassName={"model-background"}>
        <NewPictureFormContainer closeModal={this.closeModal.bind(this)}/>
      </Modal>;
    }
    let items = project.project_pics_id
    .map(id => (<ProjectDetailItemsContainer key={id} id={id}
                openModal={this.openModal.bind(this)}/>));
    return (
      <div>
        <a onClick={()=>{this.props.history.push('/profile');}}>Back to Project List</a>
        <h2 className="projecr-detail-title">
          <p className="location">{project.city} {project.state}</p>
          {deleteLink}
        </h2>
        {link}
        <ul className="pics-index pro">
          {items}
        </ul>
        {modal}
      </div>
    );
  }
}

export default ProjectDetail;
// link = <Link to={`/profile/projects/${project.id}/newPic`} >Add New Picture To the Project</Link>;
