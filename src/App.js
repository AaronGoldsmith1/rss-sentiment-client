import React, {Component} from 'react';
import NavBar from './components/NavBar';

import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import DataView from './pages/DataView';
import FeedList from './pages/FeedList';

import axios from 'axios';


class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
    }

    this.handleLogin = this.handleLogin.bind(this)
  }
  

  handleLogin(e, userData) {
   e.preventDefault()
   console.log('login clicked', userData)
  //  this.setState({userCredentials: userData}) //dont need this
   
   axios.post('http://localhost:4000/api/v1/auth/login', userData, { headers: { 'Content-Type': 'application/json' }})
      .then((response) => {
        console.log(response)
        this.setState({currentUser: response.data.user})
      })
  }


  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
         <Switch>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/signup' component={ SignUp }/>
          <Route exact path='/login' component={() => <LogIn handleLogin={this.handleLogin} /> } />
          <Route exact path='/data' component={ DataView }/>
          <Route exact path='/feeds' component={ FeedList }/>
        </Switch>
      </div>
    );
  }
};

export default App;
