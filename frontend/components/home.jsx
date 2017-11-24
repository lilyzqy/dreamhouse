import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home group">
      <img className="hero-pic" src='https://images.unsplash.com/photo-1509205705783-0623e1c4e404?auto=format&fit=crop&w=1403&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'></img>
      <span className="home-text"><p className='inspire'>Get inspired</p>
      <p>By photos of well designed real projects</p>
      <p>Join us to create your own collection of your favourite designs</p>

      <Link to="/signup">Join Free</Link>
      </span>
    </div>
  );
};

export default Home;
