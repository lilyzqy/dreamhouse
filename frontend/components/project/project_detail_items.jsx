import React from 'react';

class ProjectDetailItems extends React.Component {

  handleClick(type){
    return ()=>{
      if (type === "favorite"){
        if(this.props.currentUser){
          this.props.createFavorite(this.props.id);
        }else{
          this.props.openModal();
        }
      }else{
        this.props.deleteFavorite(this.props.id);
      }
    };
  }

  render(){
    let pic = this.props.pictures[this.props.id];
    if(!pic){
      return (<div></div>);
    }
    let type = 'favorite';
    let heartType = "fa-heart-o";
    if(pic.favorited_by_current_user){
      type = "unfavorite";
      heartType = "fa-heart";
    }
    let likeButton = <i className={`fa ${heartType}`} aria-hidden="true"></i>;
    let link;
    if(this.props.match.path === "/profile/projects/:projectId"){
      link =
      <a className="close" onClick={()=>this.props.deletePicture(this.props.id)
          .then(this.props.fetchUserProjects(this.props.currentUser.id))}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </a>;
      likeButton = undefined;
    }
    return (
      <li className="pic-item-li">
        {link}
        <img className="pics" src={pic.image_url}></img>
        <div className="pic-bottom">
          <a className="like-button" onClick={this.handleClick(type)}>
            {likeButton}
          </a>
        </div>
      </li>
    );
  }
}

export default ProjectDetailItems;
