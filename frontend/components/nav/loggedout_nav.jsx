import React from 'react';
import { Link } from 'react-router-dom';

class LoggedOutNav extends React.Component {
  render(){
    return (
      <div>
        <Link to="/signup" >Sign Up</Link>
        <Link to="/login" >Log In</Link>
      </div>
    );
  }
}

export default LoggedOutNav;
