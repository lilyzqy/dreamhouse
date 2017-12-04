import React from 'react';
import values from 'lodash/values';
import Modal from 'react-modal';

import PicAllItems from './pic_all_items';
import SignupFormContainer from '../session_form/signup_form_container';

class PicAll extends React.Component {
  constructor(){
    super();
    this.state = {
      modalOn: false
    };
  }

  openModal() {
   this.setState({modalOn: true});
  }

  closeModal() {
    return ()=> this.setState({modalOn: false});
  }

  componentWillMount(){
    this.props.fetchPictures();
  }

  render(){
    const pics = values(this.props.pictures);
    const Pics = pics.map(pic => (
      <PicAllItems key= {pic.id} pic={pic}
        createFavorite={this.props.createFavorite}
        deleteFavorite={this.props.deleteFavorite}
        currentUser={this.props.currentUser}
        openModal={this.openModal.bind(this)} />
    ));
    if(!pics){
      return (<div>no</div>);
    }
    return (
      <div>
        <h2 className="inside-title">What's new</h2>
        <ul className= "pics-index">
          {Pics}
        </ul>
        <Modal
          isOpen={ this.state.modalOn}
          onRequestClose={ this.closeModal()}
          backDropClosesModal={ true }
          className={"modal-show"}
          overlayClassName={"model-background"}>
          <p>Love the design? Don't let the inspiration slip away! Join us Today!</p>
          <SignupFormContainer closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default PicAll;
