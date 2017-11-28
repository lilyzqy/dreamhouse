import React from 'react';
import { Link } from 'react-router-dom';

class ProjectItems extends React.Component {
  render() {
    let project = this.props.project;
    if(!project.cover_pic_url){
      return (<div></div>);
    }
    return(
      <li>
        <p>{project.title}</p>
        <Link to={`/projects/${project.id}`}>
          <img src={project.cover_pic_url}></img>
        </Link>
      </li>
    );
  }
}

export default ProjectItems;
