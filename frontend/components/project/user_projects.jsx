import React from 'react';
import ProjectItems from './user_project_items';
import values from 'lodash/values';
import { Link } from 'react-router-dom';

class UserProjects extends React.Component {
  componentWillMount(){
    let id = this.props.match.params.userId;
    if (this.props.match.path === '/profile'){
      id = this.props.currentUser.id;
    }
    this.props.fetchUserProjects(id);
  }

  render(){
    let text=(<div className="fav-title">
                <h2>Project Gallary</h2>
              </div>);
    let projects = values(this.props.projects);
    let Projects = projects.map(project => <ProjectItems key={project.id} project={project}/>);
    let user = this.props.user;
    let declare;
    if (this.props.match.path === '/profile'){
      text = (<div className="fav-title">
                <h2 className="tab">My Projects</h2>
                <Link className="tab" to="/profile/favorites" >My Favorites</Link>
              </div>);
      if(Projects.length === 0){
        declare = (<p className="declare">It seems like you don't have any projects yet, click Add New Project to get started</p>);
      }
    }
    return (
      <div className="projects">
        {text}
        {declare}
        <ul className="project-index">
          {Projects}
        </ul>
      </div>
    );
  }

}

export default UserProjects;
