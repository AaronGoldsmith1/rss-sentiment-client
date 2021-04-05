import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import DataView from './pages/DataView';
import FeedList from './pages/FeedList';
import FeedDetail from './pages/FeedDetail';

import axios from 'axios';


class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }
  

  handleLogin(e, userData) {
   e.preventDefault()
   
   axios.post('http://localhost:4000/api/v1/auth/login', userData, { headers: { 'Content-Type': 'application/json' }})
    .then((response) => {
      this.setState({currentUser: response.data.user}, () => {
        localStorage.setItem('currentUser', JSON.stringify(this.state.currentUser))
      })
    })
    this.props.history.push('/feeds')
  }

  handleSignup(e, userData) {
    e.preventDefault()
    axios.post('http://localhost:4000/api/v1/auth/register', userData, { headers: { 'Content-Type': 'application/json' }})
    .then((response) => {

      this.setState({currentUser: response.data.createdUser}, () => {
        localStorage.setItem('currentUser', JSON.stringify(this.state.currentUser))
      })
    })
    this.props.history.push('/feeds')

  }


  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
         <Switch>
          <Route exact path='/' component={() => <Home homePath={this.state.currentUser ? '/feeds' : '/login' } /> }/>
          <Route exact path='/signup' component={() => <SignUp handleSignup={this.handleSignup} /> } />
          <Route exact path='/login' component={() => <LogIn handleLogin={this.handleLogin} />  } />
          <Route exact path='/feeds' component={() => this.state.currentUser ? <FeedList user={this.state.currentUser ? this.state.currentUser : []} /> : <LogIn handleLogin={this.handleLogin} />  } />
          <Route exact path='/feeds/detail' component={ this.state.currentUser ? FeedDetail : () => <LogIn handleLogin={this.handleLogin} /> }/>
          <Route exact path='/data' component={ () => this.state.currentUser ? <DataView data={ this.state.currentUser ? this.state.currentUser.feeds : []} /> : <LogIn handleLogin={this.handleLogin} /> }/>
        </Switch>
        
      </div>
    );
  }
};

export default withRouter(App);
