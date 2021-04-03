import { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

class Home extends Component {
  render() {
    return (
    <div className="ui inverted vertical masthead center aligned segment home-landing--segment">
      <div className="ui text container home-landing--text">
        <h1 className="ui inverted header">
          RSS-Sentiment
        </h1>
        <h2>Filter Your RSS Feeds By Sentiment Polarity</h2>
        <Link to={this.props.homePath} className="ui huge primary button">Get Started <i className="right arrow icon"></i></Link>
      </div>
    </div>
    );
  }
};

export default Home;