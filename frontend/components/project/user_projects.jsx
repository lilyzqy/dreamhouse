import React from 'react';
import ProjectItems from './user_project_items';
import values from 'lodash/values';

class UserProjects extends React.Component {
  componentWillMount(){
    let id = this.props.match.params.userId;
    if (this.props.match.path === '/profile'){
      id = this.props.currentUser.id;
    }
    this.props.fetchUserProjects(id);
  }

  render(){
    let projects = values(this.props.projects);
    let Projects = projects.map(project => <ProjectItems key={project.id} project={project} />);
    let user = this.props.user;
    return (
      <div className="projects">
        <div>
        </div>
        <ul className="pics-index">
          {Projects}
        </ul>
      </div>
    );
  }

}

export default UserProjects;
