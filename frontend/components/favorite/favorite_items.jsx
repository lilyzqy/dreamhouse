import React from 'react';

class FavoriteItems extends React.Component {
  handleClick(picId){
    return ()=>{
      this.props.deleteFavorite(picId).then(()=>this.props.removePic(picId));
    };
  }

  render(){
    let picId = this.props.pic.id;
    return (
      <li className="pic-item-li">
        <a className="close" onClick={this.handleClick(picId)}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </a>
        <img className="pics" src={this.props.pic.image_url}></img>
        <div className="pic-bottom">
          <i className="fa fa-expand" aria-hidden="true"></i>
        </div>
      </li>
    );
  }
}

export default FavoriteItems;
