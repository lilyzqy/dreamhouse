import React from 'react';
import { Link } from 'react-router-dom';

class PicDetail extends React.Component {
  componentWillMount(){
    let test = this;
    this.props.fetchPicture(this.props.match.params.picId).then(()=>{
      test.props.fetchUser(test.props.picture.user_id).then(()=>{
        test.props.fetchProject(test.props.picture.project_id);
      });
    });
  }


  render(){
    const pic = this.props.picture;
    if(!pic){
      return (<div></div>);
    }
    const user = this.props.users[pic.user_id];
    const project = this.props.projects[pic.project_id];
    if(!user || !project){
      return (<div></div>);
    }
    return (
      <div className="picdetail">
        <div className='up'>
          <img src={pic.image_url}></img>
        </div>
        <div className='bottom'>
          <div className='bottom-left'>
            <h3>Picture Infomation</h3>
            <p>
              location: {project.city} {project.state}
            </p>
          </div>
          <div className='bottom-right'>
            <img src={user.image_url} ></img>
            <div>
              <h3>{user.username}</h3>
              <Link to={`/users/${user.id}/projects`} >See More Projects from This Designer</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PicDetail;
