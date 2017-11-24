import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class LoggedInNav extends React.Component {
  handleSubmit(){
    return (e)=>{
      e.preventDefault();
      this.props.logout();
    };
  }

  render(){
    let MyProfile = null;
    if (this.props.location.pathname !== '/profile'){
      MyProfile = (<Link to="/user/:userId" className='nav-button'>My Profile</Link>);
    }
    return (
      <div>
        {MyProfile}
        <Link to="/login" className='nav-button' onClick={this.handleSubmit()}>Log Out</Link>
      </div>
    );
  }
}

export default withRouter(LoggedInNav);
