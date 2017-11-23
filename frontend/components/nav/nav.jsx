import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  handleSubmit(){
    return (e)=>{
      e.preventDefault();
      this.props.logout();
    };
  }

  render(){
    return (
      <div>
        <Link to="/home">
          <h3>Dreamhouse</h3>
        </Link>
        <button></button>
      </div>
    );
  }

}

export default Nav;
