import React from 'react';
import { Link } from 'react-router-dom';

class Favorites extends React.Component {

  render(){
    return (
      <div>
        <Link to="/users/:userId/projects" >Projects</Link>
        <h2>Favorites</h2>
      </div>
    );
  }
}

export default Favorites;
