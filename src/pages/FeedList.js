import axios from 'axios';
import {Component} from 'react'
import { withRouter } from 'react-router-dom';

class FeedList extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(e) {
    const feedId = e.target.dataset.id

    axios.get(`http://localhost:4000/api/v1/feeds/${feedId}`)
      .then((response) => {
        console.log(response.data.data.items)
       this.props.history.push({
         pathname: '/feeds/detail',
         state: { items: response.data.data.items }
        })
      })
  }

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
              <div data-id={item._id} onClick={this.handleClick} className="date">
                {item.feedUrl} - <i className="info circle icon"></i>
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

export default withRouter(FeedList)
