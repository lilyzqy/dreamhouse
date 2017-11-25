import React from 'react';

class PicDetail extends React.Component {
  componentWillMount(){
    this.props.fetchPicture(this.props.match.params.picId);
  }

  render(){
    const pic = this.props.picture;
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
