import React from 'react';
import { Link } from 'react-router-dom';


class PicAllItems extends React.Component {

  handleClick(type){
    return ()=>{
      if (type === "favorite"){
        if(this.props.currentUser){
          this.props.createFavorite(this.props.pic.id);
        }else{
          this.props.openModal();
        }
      }else{
        this.props.deleteFavorite(this.props.pic.id);
      }
    };
  }

  render(){
    const pic = this.props.pic;
    let type = 'favorite';
    let heartType = "fa-heart-o";
    if(pic.favorited_by_current_user){
      type = "unfavorite";
      heartType = "fa-heart";
    }
    return (
      <li className="pic-item-li">
        <Link to={`/pictures/${pic.id}`}>
          <img className="pics" src={pic.image_url}></img>
        </Link>
        <div className="pic-bottom">
          <a className="like-button" onClick={this.handleClick(type)}>
            <i className={`fa ${heartType}`} aria-hidden="true"></i>
          </a>
        </div>
      </li>
    );
  }
}

export default PicAllItems;
