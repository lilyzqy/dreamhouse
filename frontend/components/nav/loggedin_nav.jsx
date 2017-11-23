import React from 'react';
import { Link } from 'react-router-dom';


class LoggedInNav extends React.Component {
  handleSubmit(){
    return (e)=>{
      e.preventDefault();
      this.props.logout();
    };
  }

  render(){
    return (
      <div>
        <Link to="/user/:userId" >My Profile</Link>
        <Link to="/login" onClick={this.handleSubmit()}>Log Out</Link>
      </div>
    );
  }
}

export default LoggedInNav;
