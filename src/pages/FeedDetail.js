import {Component} from 'react'

import uuid from 'uuid';
import moment from 'moment';

export default class FeedDetail extends Component {
  feedItems = this.props.location.state.items;
  title = this.props.location.state.title
  render() {
    return (
        <>
    <h1>{this.title} - Feed Items</h1>
    
    <div className="five wide column">
      <div className="ui relaxed divided list">
       {this.feedItems.map((item) => {
        return <div key={uuid.v4()} className="item">
        <div className="content">
          <a href={item.link}><span className="header">{item.title}</span></a>
       
          <div className="">{moment(item.date).format('LLL')}</div>
        </div>
        </div>
      })}
      </div>
    </div>
    </>
    )
  }
}