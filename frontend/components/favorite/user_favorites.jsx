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
    let Text;
    console.log(pics);
    if(pics === []){
      Text =()=> (<p>
        <Link to='/pictures' >
          <h2>You don't have any collection yet. Lets Go and explore!</h2>
        </Link>
      </p>);
    }
    const Pics = pics.map(pic => (
      <FavoriteItems key= {pic.id} pic={pic}
        deleteFavorite={this.props.deleteFavorite}
        fetchUserFavoritedPictures={this.props.fetchUserFavoritedPictures} />
    ));
    if(!pics){
      return (<div>no</div>);
    }
    return (
      <div>
        <div className="fav-title">
          <h2>My Favorites</h2>
          <Link to="/profile/projects" >My Projects</Link>
        </div>
        {Text}
        <ul className= "pics-index">
          {Pics}
        </ul>
      </div>
    );
  }
}

export default Favorites;
