import axios from 'axios';
import {Component} from 'react'
import { withRouter } from 'react-router-dom';

import { Button, Header, Modal, Icon } from 'semantic-ui-react'

import './FeedList.css'

class FeedList extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      modalOpen: false,
      currentUser: this.props.user,
      feedToAdd: '',
      feedToUpdate: '',
      filterStrength: '',
    }
    
    this.viewFeedItems = this.viewFeedItems.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addFeed = this.addFeed.bind(this)
    this.deleteFeed = this.deleteFeed.bind(this)
    this.updateFeed = this.updateFeed.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  handleChange(e) {
    this.setState({ feedToAdd: e.target.value });
  } 

  deleteFeed(item) {
    const data = {
      userId: this.props.user._id,
      feedId: item._id
    }

    axios.delete('http://localhost:4000/api/v1/feeds/destroy', {data: data}, { headers: { 'Content-Type': 'application/json' }})
     .then((response) => {
       console.log(response)
       this.setState({ currentUser: response.data.data.user }, () => {
        localStorage.setItem('currentUser', JSON.stringify(this.state.currentUser))
      })
    })
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
  
  updateFeed(item) {
    this.setState({modalOpen: false})
    console.log(this.state.filterStrength)
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

  toggleModal(item){
    this.state.modalOpen === false ? 
    this.setState({ modalOpen: true, feedToUpdate: item }) : 
    this.setState({modalOpen: false, feedToUpdate: '' })
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
        <Modal.Content>
            <Modal.Description>
            <Header>Adjust Sentiment Filter Strength </Header>
            <h5>Feed: {this.state.feedToUpdate.title}</h5>
            
            <h5>Filter Strength: {this.state.filterStrength}</h5>
              <i size="huge" className="frown outline icon filter-icons"></i>
            <div className="ui buttons">  
              <button onClick={() => this.setState({filterStrength: 0})} className={this.state.feedToUpdate.filterStrength === 0 ? 'ui button disabled' : 'ui button'}>0</button>
              <button onClick={() => this.setState({filterStrength: 1})} className={this.state.feedToUpdate.filterStrength === 1 ? 'ui button disabled' : 'ui button'}>1</button>
              <button onClick={() => this.setState({filterStrength: 2})} className={this.state.feedToUpdate.filterStrength === 2 ? 'ui button disabled' : 'ui button'}>2</button>
              <button onClick={() => this.setState({filterStrength: 3})} className={this.state.feedToUpdate.filterStrength === 3 ? 'ui button disabled' : 'ui button'}>3</button>
            </div>
              <i size="huge" className="smile outline icon filter-icons"></i>
            </Modal.Description>
            </Modal.Content>
          <Modal.Actions>
          <Button color='black' onClick={() => this.setState({modalOpen: false})}>Cancel</Button>
        <Button
          content="Submit"
          onClick={() => this.updateFeed(this.state.feedToUpdate)}
          positive
        />
          </Modal.Actions>
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
           
              <Icon onClick={() => this.toggleModal(item)} name="info circle" size="large" />
              <Icon onClick={() => this.deleteFeed(item)} name="trash alternate" size="large" />
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
