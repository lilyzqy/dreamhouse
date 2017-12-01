import React from 'react';
import { Link } from 'react-router-dom';
import ProjectDetailItemsContainer from './project_detail_items_container';
import Modal from 'react-modal';
import NewPictureFormContainer from '../picture/new_picture_form_container';

class ProjectDetail extends React.Component {
  constructor(){
    super();
    this.state = {
      modalOn: false
    };
  }

  openModal() {
   return()=> this.setState({modalOn: true});
  }

  closeModal() {
    return ()=> this.setState({modalOn: false});
  }

  componentWillMount(){
    this.props.fetchProject(this.props.match.params.projectId).then(this.props.fetchPictures());
  }

  handleClick(id){
    return ()=> this.props.deleteProject(id).then(()=>this.props.history.push('/profile/projects'));
  }

  render(){
    let project = this.props.project;
    if(!project){
      return (<div></div>);
    }
    let link;
    if(this.props.currentUser && this.props.currentUser.id === project.user_id){
      link = <a className="addPic" onClick={this.openModal()}>
        <i class="fa fa-plus" aria-hidden="true"></i>
        Add New Picture To the Project</a>;
    }
    let items = project.project_pics_id
    .map(id => (<ProjectDetailItemsContainer key={id} id={id} />));
    return (
      <div>
        <h2 className="projecr-detail-title">
          <p className="location">{project.city} {project.state}</p>
          <a onClick={this.handleClick(project.id)}>
            <i class="fa fa-trash" aria-hidden="true"></i>
            Delete This Project</a>
        </h2>
        {link}
        <ul className="pics-index">
          {items}
        </ul>
        <Modal
          isOpen={ this.state.modalOn}
          onRequestClose={ this.closeModal()}
          backDropClosesModal={ true }
          className={"modal-show"}
          overlayClassName={"model-background"}>
          <NewPictureFormContainer closeModal={this.closeModal.bind(this)}/>
        </Modal>
      </div>
    );
  }
}

export default ProjectDetail;
// link = <Link to={`/profile/projects/${project.id}/newPic`} >Add New Picture To the Project</Link>;
