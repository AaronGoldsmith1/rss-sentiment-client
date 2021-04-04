import {Component} from 'react'
import { Button, Icon, Modal, List, Transition } from 'semantic-ui-react'


import feedData from './feeds'
import axios from 'axios'

class SuggestedFeeds extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      feeds: feedData,
      currentUser: this.props.currentUser
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.addFeed = this.addFeed.bind(this)
  }
  


  handleAdd(feedUrl, idx) {
    const updatedFeeds = this.state.feeds
    updatedFeeds.splice(idx, 1)
    console.log(updatedFeeds)
    this.setState({feeds: updatedFeeds})
    this.addFeed(feedUrl)
  }



    addFeed(feedUrl) {
    const data = {
      userId: this.props.currentUser._id,
      feedUrl: feedUrl
    }
    axios.post('http://localhost:4000/api/v1/feeds/', data, { headers: { 'Content-Type': 'application/json' }})
    .then((response) => {
      console.log(response)
       this.setState({currentUser: response.data.user, feedToAdd: ''}, () => {
        localStorage.setItem('currentUser', JSON.stringify(this.state.currentUser))
      })
    })
  }
  
  
  render() {

  return (
    <Modal
      open={this.state.open}
      onClose={() => this.setState({open: false})}
      onOpen={() => this.setState({open: true})}
      trigger={<Button>Please Select RSS Feeds</Button>}
    >
      <Modal.Header>Please Select Some RSS Feeds</Modal.Header>
      <Modal.Content scrolling>

        <Modal.Description>
          <Transition.Group
          as={List}
          duration={500}
          divided
          size='huge'
          verticalAlign='middle'
        >
          {this.state.feeds.map((feed, idx) => (
            <List.Item key={idx}>
              
              <List.Content header={feed.linkText} />
              {feed.linkUrl} <Button onClick={() => this.handleAdd(feed.linkUrl, idx)}>+</Button>
            </List.Item>
          ))}
        </Transition.Group>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={() => this.setState({open: false})} >
          Proceed <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
          }
}

export default SuggestedFeeds