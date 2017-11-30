import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SignupFormContainer from './session_form/signup_form_container';

class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      modalOn: false
    };
  }

  openModal() {
   return()=> this.setState({modalOn: true});
  }

  closeModal() {
    return ()=> this.setState({modalOn: false});
  }

  render(){
    return (
      <div className="home">
        <img className="hero-pic" src='https://images.unsplash.com/photo-1509205705783-0623e1c4e404?auto=format&fit=crop&w=1403&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'></img>
        <span className="home-text">
          <p className='inspire'>Get inspired</p>
          <p>By photos of well designed real projects</p>
          <p>Join us to create your own collection of your favourite designs</p>
          <a onClick={this.openModal()} className="joinlink" >Join Free</a>
        </span>
        <span className="explorelink">
          <Link to="/pictures">Explore Around</Link>
        </span>
        <Modal
          isOpen={ this.state.modalOn}
          onRequestClose={ this.closeModal()}
          backDropClosesModal={ true }
          className={"modal-show"}
          overlayClassName={"model-background"}>
          <SignupFormContainer closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default Home;
