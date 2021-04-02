import React, {Component} from 'react';
import NavBar from './components/NavBar';

import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import DataView from './pages/DataView';
import FeedList from './pages/FeedList';


class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
      userCredentials: null,
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.doLogin = this.doLogin.bind(this)
  }
  

  handleLogin(e) {
   e.preventDefault()
   console.log('login clicked')

  }

  doLogin(userData) {
    // this.setState({userCredentials: userData})
    console.log('App Component UserData: ', userData)
  }
  

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
         <Switch>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/signup' component={ SignUp }/>
          <Route exact path='/login' component={() => <LogIn handleLogin={this.handleLogin} doLogin={this.doLogin} /> } />
          <Route exact path='/data' component={ DataView }/>
          <Route exact path='/feeds' component={ FeedList }/>
        </Switch>
      </div>
    );
  }
};

export default App;
