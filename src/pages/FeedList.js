import axios from 'axios';
import {Component} from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Header, Modal, Icon, Item, Label  } from 'semantic-ui-react'

import SuggestedFeeds from '../components/SuggestedFeeds';
import './FeedList.css'

import _ from 'lodash';


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
      window.location.reload()
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
      window.location.reload()
    })
    // document.getElementById('new-feed').value = ''
  }
  
  updateFeed() {
    const data = {
      filterStrength: this.state.filterStrength || this.feedToUpdate.filterStrength,
      feedId: this.state.feedToUpdate._id,
      userId: this.props.user._id
    }
    console.log(data)
    axios.put('http://localhost:4000/api/v1/feeds/update', data, { headers: { 'Content-Type': 'application/json' }})
    .then((response) => {
      this.setState({currentUser: response.data.data.user, modalOpen: false, filterStrength: ''}, () => {
        localStorage.setItem('currentUser', JSON.stringify(this.state.currentUser))
      })
      window.location.reload()
    })
  }
  
  viewFeedItems(e) {
    const feedId = e.target.dataset.id

    const filterStrength = this.state.currentUser.feeds.filter(feed => feed._id === feedId)[0].filterStrength

    axios.get(`http://localhost:4000/api/v1/feeds/${feedId}/${filterStrength}`)
      .then((response) => {
       this.props.history.push({
         pathname: '/feeds/detail',
         state: { 
          title: response.data.data.title,
          items: response.data.data.items,
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
            
            <h5>Filter Strength: {this.state.filterStrength ? this.state.filterStrength : this.state.feedToUpdate.filterStrength }</h5>
              <i size="huge" className="frown outline icon filter-icons"></i>
            <div className="ui buttons">  
              <button className="ui button" onClick={() => this.setState({filterStrength: '0'})}>0</button>
              <button className="ui button" onClick={() => this.setState({filterStrength: 1})}>1</button>
              <button className="ui button" onClick={() => this.setState({filterStrength: 2})}>2</button>
              <button className="ui button" onClick={() => this.setState({filterStrength: 3})}>3</button>
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

      <div className="ui main text container feed-container">
        <Header as='h1' textAlign='center'>My RSS Feeds</Header>
        <div className="ui container center aligned">
          <div className="ui input  ">
            <input id="new-feed" type="text" placeholder="Add RSS Feed" onChange={this.handleChange} />
            <input value="Enter" type="button" className="ui button primary" onClick={this.addFeed} />
          </div>
        </div>
        <Item.Group divided>
        { this.state.currentUser.feeds.length ? _.uniqBy(this.state.currentUser.feeds, 'feedUrl').map((item, idx) => { 
          console.log(item)
          return <Item key={idx}> 
            <Item.Content>
              <Icon size="large" className="rss-icon" name="rss" />
            <Item.Header 
              as="a" 
              className="summary"
              data-id={item._id} 
              onClick={this.viewFeedItems}
              > {item.title}</Item.Header>
              <div className="feed-icons">
                <Icon onClick={() => this.toggleModal(item)} name="info circle" size="large" />
                <Icon onClick={() => this.deleteFeed(item)} name="trash alternate" size="large" />
              </div>
              
              <Item.Meta>{item.description}</Item.Meta>
              <Item.Extra>{item.feedUrl}</Item.Extra>
           
            { item.imageUrl ? <Item.Image size="mini" src={item.imageUrl} alt="rss"/> : '' }
              <Label className="feed-icons" as='a' target="_blank" rel="noreferrer" href={item.sourceUrl}>
                <Icon name='linkify' /> Source
              </Label>

           </Item.Content>
        </Item>
      })
   : 
  
      
  <SuggestedFeeds currentUser={this.state.currentUser} addFeed={this.addFeed} />
  
  }
    </Item.Group>
  </div>
  </>
    )
  }
}

export default withRouter(FeedList)
//  { item.imageUrl ? <Item.Image size="mini" src={item.imageUrl} alt="rss"/> : <i className="rss icon"></i> }
  //  <Item.Description as='a' data-id={item._id} onClick={this.viewFeedItems} className="date">{item.feedUrl}</Item.Description>

  //  <Label as='a'>
  //   <Icon name='mail' /> 23
  // </Label>