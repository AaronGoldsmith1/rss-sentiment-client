import {Component} from 'react'

import uuid from 'uuid';

export default class FeedDetail extends Component {
  feedItems = this.props.location.state.items;
  render() {
    console.log('FEED DETAIL: ', this.props.location.state.items)
   
    return (
        <>
    <h1>Feed Items</h1>
    
    <div className="five wide column">
      <div className="ui relaxed divided list">
       {this.feedItems.map((item) => {
        return <div key={uuid.v4()} className="item">
        <div className="content">
          <a href={item.link}><span className="header">{item.title}</span></a>
       
          <div className="">{item.date}</div>
        </div>
        </div>
      })}
      </div>
    </div>
    </>
    )
  }
}