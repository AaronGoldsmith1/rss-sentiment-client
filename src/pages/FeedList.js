import {Component} from 'react'

export default class FeedList extends Component {
  
  render() {
    console.log(this.props.feeds)
    return (
      <div className="ui main text container">
        <h1 className="ui header center">My RSS Feeds</h1>
        <div className="ui feed">
        { this.props.feeds.map((item, idx) => { 
        return <div key={idx} className="event">
            <div className="label">
              <img src={item.imageUrl} alt="rss"/>
            </div>
            <div className="content">
              <div className="date">
                {item.feedUrl} - <i class="info circle icon"></i>
              </div>
              <div className="summary">
                {item.title} - {item.description}
              </div>
          </div>
        </div>
      })
    }
    </div>
  </div>
    )
  }
}

