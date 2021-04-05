import { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css'


class Home extends Component {


  render() {
    return ( <div>
    <div className="ui inverted vertical masthead center aligned segment home-landing--segment">
      <div className="ui text container home-landing--text">
        <h1 className="ui inverted header">
          RSS-Sentiment
        </h1>
        <h2>Filter Your RSS Feeds By Sentiment Polarity</h2>
        <Link to={this.props.homePath} className="ui huge primary button">Get Started <i className="right arrow icon"></i></Link>
      </div>
    </div>
    <div class="ui vertical stripe quote segment">
    <div class="ui equal width stackable internally celled grid">
      <div class="center aligned row">
        <div class="column">
          <h3>This project applies the AFINN-165 wordlist to blocks of input text, and produces a numerical score based on the 'positive' or 'negative' quality of the text content.</h3>
          <h4>You can filter RSS feeds by sentiment with the following values:  </h4>
            
            <div class="ui segment filter-segment ">
              <div class="ui list">
                <div class="item">
                  <div class="content">
                  0: No filtering - Show All Items
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                  1: Some Negative Items
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                  2: Positive Items Only
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                  3: Very Positive Items Only
                  </div>
                </div>
              </div>
            </div>
            
        
          </div>
        <div class="column">
          <h3>"I love cats, but I am allergic to them."</h3>
          <div class="ui segment">
          <pre><code>
    {`{
    score: 0.1111111111111111,
    calculation: [ { allergic: -2 }, { love: 3 } ],
    tokens: 9,
    positive: ['love'],
    negative: ['allergic']
}`}
    </code></pre>
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