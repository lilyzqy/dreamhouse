import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class LoggedOutNav extends React.Component {
  render(){
    let SignUp = null;
    let LogIn = null;
    if (this.props.location.pathname !== '/signup'){
      SignUp = (<Link className="nav-button" to="/signup" >Join Free</Link>);
    }
    if (this.props.location.pathname !== '/login') {
      LogIn = (<Link className="nav-button" to="/login" >Log In</Link>);
    }

    return (
      <div>
        <ul className="right-nav">
          {LogIn}
          {SignUp}
        </ul>
      </div>
    );
  }
}

export default withRouter(LoggedOutNav);
