import React from 'react';
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
    let items = project.project_pics_id
    .map(id => (<ProjectDetailItemsContainer id={id} />));
    return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default ProjectDetail;
