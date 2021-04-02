import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../auth.css'

class LogIn extends Component {
  constructor() {
    super()
      this.state = {
        userName: '',
        email: '',
        password: ''
    }
  }
 

  setUserName(e) {
    this.setState({userName: e.target.value})
    console.log(this.state)
  }

  setUserEmail(e) {
    this.setState({email: e.target.value})
    console.log(this.state)
  }

  setUserPassword(e) {
    this.setState({password: e.target.value})
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }




  render() {
    return (
    <div className="ui middle aligned center aligned grid auth-form">
      <div className="column">
        <h2 className="ui header">
          <div className="content">
            Log-in to your account
          </div>
        </h2>
        <form className="ui large form loginform" onSubmit={e => this.props.handleLogin(e, this.state)}>
          <div className="ui stacked segment">

            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" 
                name="username" 
                placeholder="User Name"
                onChange={(e) => this.setUserName(e)}
                />
              </div>
            </div>
           
            <div className="field">
              <div className="ui left icon input">
                <i className="at icon"></i>
                <input type="text" 
                name="email" 
                placeholder="E-mail address"
                onChange={(e) => this.setUserEmail(e) }
                />
              </div>
            </div>
            
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" 
                name="password" 
                placeholder="Password"
                onChange={(e) => this.setUserPassword(e) }
                />
              </div>
            </div>
            <button type="submit" className="ui fluid large teal submit button">Login</button>
      </div>
      <div className="ui error message"></div>
    </form>
    <div className="ui message">
      New to us? <Link to={'/signup'} href="#">Sign Up</Link>
    </div>
  </div>
</div>
  );
  }
};

export default LogIn;