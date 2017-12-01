import React from 'react';

class ProjectDetailItems extends React.Component {

  render(){
    let pic = this.props.pictures[this.props.id];
    if(!pic){
      return (<div></div>);
    }
    let link;
    if(this.props.match.path === "/profile/projects/:projectId"){
      link =
      <a className="close" onClick={()=>this.props.deletePicture(this.props.id)
          .then(this.props.fetchUserProjects(this.props.currentUser.id))}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </a>;
    }
    return (
      <li className="pic-item-li">
        {link}
        <img className="pics" src={pic.image_url}></img>
        <div className="pic-bottom">
          <i className="fa fa-expand" aria-hidden="true"></i>
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <div className="pic-bottom-over">
          <i className="fa fa-heart" aria-hidden="true"></i>
        </div>
      </li>
    );
  }
}

export default ProjectDetailItems;
