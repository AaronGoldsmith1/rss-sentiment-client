import {Component} from 'react'

import uuid from 'uuid';
import moment from 'moment';

import { Header, List, Icon, Popup } from 'semantic-ui-react'

import './FeedDetail.css'

export default class FeedDetail extends Component {

  feedItems = this.props.location.state.items;
  
  title = this.props.location.state.title
  
  render() {
  
    return (
        <>
    <Header as="h1" textAlign='center'>{this.title}</Header>
    
    <div className="ui main text container">
      <List divided relaxed >
       {this.feedItems.map((item) => {
        console.log(item)
        return <List.Item key={uuid.v4()}>
       

          <List.Content>
          <Popup inverted content={`Score: ${item.score.toFixed(2)}`} trigger={<Icon name="info circle" color="grey" className="detail-list--info-icon" />} />
            <List.Header target="_blank" rel="noreferrer" href={item.link}>{item.title}</List.Header><div className="detail-list--header">{moment(item.date).fromNow()}</div>
            <List.Item>{item.description.replace(/<[^>]+>/g, '')}</List.Item> 
          </List.Content>
        </List.Item>
      })}
      </List>
    </div>
    </>
    )
  }
}

    //  <div className="">{moment(item.date).fromNow()}</div>
            // <div>Score: {item.score.toFixed(2)}</div>

            //  <Icon name="info circle" size="small" /> 
            //   <List.Icon name='linkify' />