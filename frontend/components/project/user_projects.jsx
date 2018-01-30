import React from 'react';
import ProjectItems from './user_project_items';
import values from 'lodash/values';
import { Link } from 'react-router-dom';

class UserProjects extends React.Component {
  constructor(){
    super();
    this.state = {
      modalOn: false,
      modalImage: ""
    };
  }

  componentWillMount(){
    let id = this.props.match.params.userId;
    if (this.props.match.path === '/profile'){
      id = this.props.currentUser.id;
    }
    this.props.fetchUserProjects(id);
  }

  render(){
    let text=<h2>Project Gallary</h2>;
    let projects = values(this.props.projects);
    let Projects = projects.map(project => <ProjectItems key={project.id} project={project} />);
    let user = this.props.user;
    if (this.props.match.path === '/profile'){
      text = (<div>
        <h2>My Projects</h2>
        <Link to="/profile/favorites" >My Favorites</Link>
      </div>);
    }
    return (
      <div className="projects">
        <div className="fav-title">
          {text}
        </div>
        <ul className="project-index">
          {Projects}
        </ul>
        <Modal
          isOpen={this.state.modalOn}
          onRequestClose={ this.closeModal()}
          backDropClosesModal={ true }
          className={"modal-full"}
          overlayClassName={"model-background"}>
          <img className="full-pic" src={this.state.modalImage}></img>
        </Modal>
      </div>
    );
  }

}

export default UserProjects;
