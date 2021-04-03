import axios from 'axios';
import {Component} from 'react'
import { withRouter } from 'react-router-dom';




class FeedList extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      currentUser: this.props.user,
      feedToAdd: '' 
    }
    
    this.viewFeedItems = this.viewFeedItems.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addFeed = this.addFeed.bind(this)
  }

  handleChange(e) {
    this.setState({ feedToAdd: e.target.value });
  } 

  addFeed() {
    console.log(this.props.user._id)
    const data = {
      userId: this.props.user._id,
      feedUrl: this.state.feedToAdd
    }
    console.log(this.props.data)
    axios.post('http://localhost:4000/api/v1/feeds/', data, { headers: { 'Content-Type': 'application/json' }})
    .then((response) => {
      console.log(response)
       this.setState({currentUser: response.data.user}, () => {
        localStorage.setItem('currentUser', JSON.stringify(this.state.currentUser))
      })
    })
  }
  
  
  viewFeedItems(e) {
    const feedId = e.target.dataset.id

    axios.get(`http://localhost:4000/api/v1/feeds/${feedId}`)
      .then((response) => {
       this.props.history.push({
         pathname: '/feeds/detail',
         state: { 
          title: response.data.data.title,
          items: response.data.data.items 
          }
        })
      })
  }

  render() {
    return (
      <div className="ui main text container">
        <h1 className="ui header">My RSS Feeds</h1>

        <div className="ui input">
          <input type="text" placeholder="Add RSS Feed" onChange={this.handleChange} />
          <input value="Enter" type="button" className="ui button" onClick={this.addFeed} />
        </div>
        <div className="ui feed">
        { this.state.currentUser.feeds.map((item, idx) => { 
        return <div key={idx} className="event">
            <div className="label">
              { item.imageUrl ? <img src={item.imageUrl} alt="rss"/> : <i className="rss icon"></i> }
            </div>
            <div className="content">
              <div data-id={item._id} onClick={this.viewFeedItems} className="date">
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
