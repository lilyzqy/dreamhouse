import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <span>Get inspired<br/>By photos of well designed real projects <br/>
      Join us to create your own collection of your favourite designs</span>
    <Link to="/sign-up">Join Free</Link>
    </div>
  );
};

export default Home;
