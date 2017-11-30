import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import SignupFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';


class LoggedOutNav extends React.Component {
  constructor(){
    super();
    this.state = {
      form:"",
      modalOn: false
    };
  }

  openModal() {
   this.setState({modalOn: true});
  }

  closeModal() {
    return ()=> this.setState({modalOn: false});
  }

  handleClick(formtype){
    return ()=>{
      this.setState({form:formtype});
      this.openModal();
    };
  }

  render(){
    let form;
    if(this.state.form === "signup"){
      form = <SignupFormContainer />;
    }else{
      form = <LoginFormContainer />;
    }
    return (
      <div>
        <ul className="right-nav">
          <a className="nav-button" onClick={ this.handleClick("login") } >Log In</a>
          <a className="nav-button" onClick={ this.handleClick("signup")} >Join Free</a>
        </ul>
        <Modal
          isOpen={ this.state.modalOn}
          onRequestClose={ this.closeModal()}
          backDropClosesModal={ true }
          className={"modal-show"}
          overlayClassName={"model-background"}>
          {form}
        </Modal>
      </div>
    );
  }
}

export default withRouter(LoggedOutNav);
