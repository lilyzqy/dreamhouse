import React from 'react';
import { Link } from 'react-router-dom';

import LoggedInNav from './loggedin_nav';
import LoggedOutNav from './loggedout_nav';


class Header extends React.Component {

  render(){
    const {loggedIn, logout} = this.props;
    let Buttons = loggedIn ? (
      <LoggedInNav logout={logout}/>
    ):(
      <LoggedOutNav />
    );
    return (
      <header className="main-nav">
        <Link to="/home" className="logo">
          <p>Dreamhouse</p>
        </Link>
        <p className="search-bar"> </p>
        {Buttons}
      </header>
    );
  }

}

export default Header;
