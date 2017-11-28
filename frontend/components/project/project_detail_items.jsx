import React from 'react';

class ProjectDetailItems extends React.Component {
  componentWillMount(){
    this.props.fetchPicture(this.props.id);
  }

  render(){
    let pic = this.props.pictures[this.props.id];
    if(!pic){
      return (<div></div>);
    }
    return (
      <li>
        <img src={pic.image_url}></img>
      </li>
    );
  }
}

export default ProjectDetailItems;
