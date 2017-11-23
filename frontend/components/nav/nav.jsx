import React from 'react';
import { Link } from 'react-router-dom';

import LoggedInNav from './loggedin_nav';
import LoggedOutNav from './loggedout_nav';


class Nav extends React.Component {

  render(){
    const {loggedIn, logout} = this.props;
    let Buttons = loggedIn ? (
      <LoggedInNav logout={logout}/>
    ):(
      <LoggedOutNav />
    );
    return (
      <div>
        <Link to="/home">
          <h3>Dreamhouse</h3>
        </Link>
        {Buttons}
      </div>
    );
  }

}

export default Nav;
