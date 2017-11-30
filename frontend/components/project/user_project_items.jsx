import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class ProjectItems extends React.Component {
  render() {
    let project = this.props.project;
    if(!project.cover_pic_url){
      return (<div></div>);
    }
    let title = "";
    if (this.props.match.path === '/profile'){
      title = project.title;
    }
    return(
      <li className="project-item">
        <p>{title}</p>
        <Link className="polaroid" to={`/profile/projects/${project.id}`}>
          <div className="frame">
            <img className="project-cover" src={project.cover_pic_url}></img>
          </div>
          <div className="note">
            <p>{project.city}, {project.state}</p>
            <p>{project.project_pics_id.length}</p>
          </div>
        </Link>
      </li>
    );
  }
}

export default withRouter(ProjectItems);
