import React from 'react';
import { Link } from 'react-router-dom';
import values from 'lodash/values';

import FavoriteItems from './favorite_items';

class Favorites extends React.Component {
  componentDidMount(){
    this.props.fetchUserFavoritedPictures();
  }

  render(){
    const pics = values(this.props.pictures);
    const Pics = pics.map(pic => (
      <FavoriteItems key= {pic.id} pic={pic}
        deleteFavorite={this.props.deleteFavorite}
        removePic={this.props.removePic} />
    ));
    if(!pics){
      return (<div>no</div>);
    }
    let link;
    if(this.props.currentUser.designer){
      link = <Link to="/profile" >My Projects</Link>;
    }
    return (
      <div>
        <div className="fav-title">
          <h2>My Favorites</h2>
          {link}
        </div>
        <ul className= "pics-index">
          {Pics}
        </ul>
      </div>
    );
  }
}

export default Favorites;
