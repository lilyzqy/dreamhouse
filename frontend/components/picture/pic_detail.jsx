import React from 'react';

class PicDetail extends React.Component {
  componentWillMount(){
    let test = this;
    this.props.fetchPicture(this.props.match.params.picId).then(()=>{
      test.props.fetchUser(test.props.picture.user_id);
    });
  }


  render(){
    const pic = this.props.picture;
    // const user = this.props.users[pic.user_id];
    if(!pic){
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
          </div>
          <div className='bottom-right'>

          </div>
        </div>
      </div>
    );
  }
}

export default PicDetail;
