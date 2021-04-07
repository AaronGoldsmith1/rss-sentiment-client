import { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

import {Icon, Container, Header} from 'semantic-ui-react'


class Home extends Component {

  render() {
    return ( <div>
    <div className="ui inverted vertical masthead center aligned segment home-landing--segment">
      <Container text className="home-landing--text">
    
        <Icon size="huge" name='rss' className="home-landing--icons__rss" />
        <Icon size="large" name='plus' />
        <Icon size="huge" name='smile outline' />

        <h1 className="home-header">
          RSS-Sentiment
        </h1>
        <Header inverted as="h2">Filter Your RSS Feeds By Sentiment Polarity</Header>
        <Link to={this.props.homePath} className="ui huge primary button">Get Started <i className="right arrow icon"></i></Link>
      </Container>
    </div>
    <div className="bottom-section ui vertical stripe quote segment">
    <div className="ui equal width stackable internally celled grid">
      <div className="center aligned row">
        <div className="column">
          <h3>This project applies the AFINN-165 wordlist to blocks of input text, and produces a numerical score based on the 'positive' or 'negative' quality of the text content.</h3>
          <h3>You can filter RSS feeds by sentiment with the following values:</h3>
            <div className="ui segment filter-segment">
              <div className="ui list">
                <div className="item">
                  <div className="content">
                  0: No filtering - Show All Items
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                  1: Some Negative Items
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                  2: Positive Items Only
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                  3: Very Positive Items Only
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="column">
          <h3>"I love cats, but I am allergic to them."</h3>
          <div className="ui segment">
            <pre>
              <code>
                {`{
  score: 0.1111111111111111,
  calculation: [ { allergic: -2 }, { love: 3 } ],
  tokens: 9,
  positive: ['love'],
  negative: ['allergic']
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </div>
    );
  }
};

export default Home;