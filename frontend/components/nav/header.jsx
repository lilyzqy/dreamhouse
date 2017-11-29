import React from 'react';
import { Link } from 'react-router-dom';

import LoggedInNav from './loggedin_nav';
import LoggedOutNav from './loggedout_nav';


class Header extends React.Component {


  render(){
    const {loggedIn, logout, currentUser} = this.props;
    let Buttons = loggedIn ? (
      <LoggedInNav logout={logout} currentUser={currentUser}/>
    ):(
      <LoggedOutNav />
    );
    let home = undefined;
    if(this.props.location.pathname === '/'){
      home = 'home-nav';
    }
    return (
      <header className={`main-nav ${home}`}>
        <Link to="/" className="logo">
          <p>Dreamhouse</p>
        </Link>
        <p className="search-bar"> </p>
        {Buttons}
      </header>
    );
  }

}

export default Header;
