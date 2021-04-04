import axios from 'axios';
import {Component} from 'react'
import { withRouter } from 'react-router-dom';

import { Button, Header, Modal, Icon } from 'semantic-ui-react'

class FeedList extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      modalOpen: false,
      currentUser: this.props.user,
      feedToAdd: '' 
    }
    
    this.viewFeedItems = this.viewFeedItems.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addFeed = this.addFeed.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  handleChange(e) {
    this.setState({ feedToAdd: e.target.value });
  } 

  addFeed() {
    const data = {
      userId: this.props.user._id,
      feedUrl: this.state.feedToAdd
    }
    axios.post('http://localhost:4000/api/v1/feeds/', data, { headers: { 'Content-Type': 'application/json' }})
    .then((response) => {
       this.setState({currentUser: response.data.user, feedToAdd: ''}, () => {
        localStorage.setItem('currentUser', JSON.stringify(this.state.currentUser))
      })
    })
    document.getElementById('new-feed').value = ''
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

  toggleModal(){
    this.state.modalOpen === false ? this.setState({ modalOpen: true }) : this.setState({modalOpen: false})
  }

  render() {
    return (
      <>
    
      
       <Modal
          onClose={() => this.setState({modalOpen: false})}
          onOpen={() => this.setState({modalOpen: true})}
          open={this.state.modalOpen}
        >

        <Modal.Header>Update RSS Feeed</Modal.Header>
        
        
        </Modal>





      <div className="ui main text container">
        <h1 className="ui header">My RSS Feeds</h1>
        <div className="ui input">
          <input id="new-feed" type="text" placeholder="Add RSS Feed" onChange={this.handleChange} />
          <input value="Enter" type="button" className="ui button" onClick={this.addFeed} />
        </div>
        <div className="ui feed">
        { this.state.currentUser.feeds ? this.state.currentUser.feeds.map((item, idx) => { 
        return <div key={idx} className="event">
            <div className="label">
              { item.imageUrl ? <img src={item.imageUrl} alt="rss"/> : <i className="rss icon"></i> }
            </div>
            <div className="content">
              <div data-id={item._id} onClick={this.viewFeedItems} className="date">
                {item.feedUrl}
              </div>
           
              <Icon onClick={this.toggleModal} name="info circle" size="large" />

              <div className="summary">
                {item.title} - {item.description}
              </div>
            </div>
        </div>
      })
   : <h3>No Feeds</h3> }
    </div>
  </div>
  </>
    )
  }
}

export default withRouter(FeedList)
