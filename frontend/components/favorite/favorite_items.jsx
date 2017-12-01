import React from 'react';

class FavoriteItems extends React.Component {

  render(){
    return (
      <li className="pic-item-li">
        <a className="close" onClick={()=>this.props.deleteFavorite(this.props.pic.id)
            .then(this.props.fetchUserFavoritedPictures())}>
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
