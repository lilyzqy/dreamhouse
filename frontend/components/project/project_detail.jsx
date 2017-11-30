import React from 'react';
import { Link } from 'react-router-dom';
import ProjectDetailItemsContainer from './project_detail_items_container';

class ProjectDetail extends React.Component {
  componentWillMount(){
    this.props.fetchProject(this.props.match.params.projectId);
  }

  render(){
    let project = this.props.project;
    if(!project){
      return (<div></div>);
    }
    let link;
    if(this.props.currentUser && this.props.currentUser.id === project.user_id){
      link = <Link to={`/profile/projects/${project.id}/newPic`} >Add New Picture To the Project</Link>;
    }
    let items = project.project_pics_id
    .map(id => (<ProjectDetailItemsContainer key={id} id={id} />));
    return (
      <div>
        <h2 className="location">{project.city} {project.state}</h2>
        {link}
        <ul className="pics-index">
          {items}
        </ul>
      </div>
    );
  }
}

export default ProjectDetail;
