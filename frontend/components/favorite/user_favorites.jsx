import React from 'react';
import { Link } from 'react-router-dom';
import values from 'lodash/values';
import Modal from 'react-modal';

import FavoriteItems from './favorite_items';

class Favorites extends React.Component {
  constructor(){
    super();
    this.state = {
      modalOn: false,
      modalImage: ""
    };
  }

  closeModal(){
    return ()=>{
      this.setState({modalOn: false});
    };
  }

  openModal(url){
    return ()=>{
      this.setState({modalOn: true, modalImage: url});
    };
  }

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
        <Modal
          isOpen={this.state.modalOn}
          onRequestClose={ this.closeModal()}
          backDropClosesModal={ true }
          className={"modal-show"}
          overlayClassName={"model-background"}>
          <p>Love the design? Don't let the inspiration slip away! Join us Today!</p>
          <img className="pics" src={this.state.modalImage}></img>
        </Modal>
      </div>
    );
  }
}

export default Favorites;
