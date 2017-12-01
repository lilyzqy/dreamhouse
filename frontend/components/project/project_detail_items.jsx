import React from 'react';

class ProjectDetailItems extends React.Component {

  render(){
    let pic = this.props.pictures[this.props.id];
    if(!pic){
      return (<div></div>);
    }
    return (
      <li className="pic-item-li">
        <a className="close">
          <i class="fa fa-times" aria-hidden="true"></i>
          </a>
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
