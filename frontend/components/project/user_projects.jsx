import React from 'react';
import ProjectItems from './user_project_items';
import values from 'lodash/values';

class UserProjects extends React.Component {
  componentWillMount(){
    this.props.fetchUserProjects(this.props.match.params.userId);
  }

  render(){
    let projects = values(this.props.projects);
    let Projects = projects.map(project => <ProjectItems key={project.id} project={project} />);
    let user = this.props.user;
    return (
      <div className="projects">
        <div>
          <h2>Hi</h2>
        </div>
        <ul className="pics-index">
          {Projects}
        </ul>
      </div>
    );
  }

}

export default UserProjects;
