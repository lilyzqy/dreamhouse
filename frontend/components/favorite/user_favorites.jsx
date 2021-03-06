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
      console.log(url);
      this.setState({modalOn: true, modalImage: url});
    };
  }

  componentDidMount(){
    this.props.fetchUserFavoritedPictures();
  }

  render(){
    let declare = (<p className="declare"></p>);
    const pics = values(this.props.pictures);
    if(pics.length === 0){
      declare = (<p className="declare">It seems like you don't have any favorited design, click <Link to="/pictures">here</Link> to start collecting</p>);
    }
    const Pics = pics.map(pic => (
      <FavoriteItems key= {pic.id} pic={pic}
        deleteFavorite={this.props.deleteFavorite}
        removePic={this.props.removePic}
        openModal={this.openModal.bind(this)}/>
    ));
    if(!pics){
      return (<div>no</div>);
    }
    let link;
    if(this.props.currentUser.designer){
      link = <Link className="tab" to="/profile" >My Projects</Link>;
    }
    return (
      <div>
        <div className="fav-title">
          <h2 className="tab">My Favorites</h2>
          {link}
        </div>
        {declare}
        <ul className= "pics-index fav">
          {Pics}
        </ul>
        <Modal
          isOpen={this.state.modalOn}
          onRequestClose={ this.closeModal()}
          backDropClosesModal={ true }
          className={"modal-full"}
          overlayClassName={"model-background"}>
          <img className="full-pic" src={this.state.modalImage}></img>
        </Modal>
      </div>
    );
  }
}

export default Favorites;
