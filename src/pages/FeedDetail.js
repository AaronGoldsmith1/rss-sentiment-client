import {Component} from 'react'

export default class FeedDetail extends Component {
  render() {
    console.log('FEED DETAIL: ', this.props.location.state.items)
    return (
    <h1>Feed Items</h1>
    )
  }
}