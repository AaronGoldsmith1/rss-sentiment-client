import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

const Home = () => {
  return (
   <div className="ui inverted vertical masthead center aligned segment home-landing--segment">



    <div className="ui text container home-landing--text">
      <h1 className="ui inverted header">
        RSS-Sentiment
      </h1>
      <h2>Filter Your RSS Feeds By Sentiment Polarity</h2>
      <Link to={'/login'} className="ui huge primary button">Get Started <i className="right arrow icon"></i></Link>
    </div>

  </div>
  );
};

export default Home;