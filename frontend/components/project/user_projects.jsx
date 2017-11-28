import React from 'react';
import ProjectItems from './user_project_items';

class UserProjects extends React.Component {
  componentWillMount(){
    this.props.fetchUserProjects(this.props.match.params.userId);
  }

  render(){
    let projects = this.props.projects;
    let user = this.props.user;
    return (
      <div>
        <div>
          <h2>user.</h2>
        </div>
        <ul>
          {projects.map(project => <ProjectItems key={project.id} project={project} />)}
        </ul>
      </div>
    );
  }

}

export default UserProjects;
