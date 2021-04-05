import {Component} from 'react'

import uuid from 'uuid';

export default class FeedDetail extends Component {

  feedItems = this.props.location.state.items;
  
  title = this.props.location.state.title
  
  render() {
  
    return (
        <>
    <h1>{this.title}</h1>
    
    <div className="five wide column">
      <div className="ui relaxed divided list">
       {this.feedItems.map((item) => {
        console.log(item)
        return <div key={uuid.v4()} className="item">
        <div className="content">
          <a target="_blank" rel="noreferrer" href={item.link}><span className="header">{item.title}</span></a>
            {item.description.replace(/<[^>]+>/g, '')}
        <div>Score: {item.score.toFixed(2)}</div>
        </div>
        </div>
      })}
      </div>
    </div>
    </>
    )
  }
}

    //  <div className="">{moment(item.date).format('LL')}</div>