import {Component} from 'react';
import { Link } from 'react-router-dom';

import '../auth.css'

class SignUp extends Component {
  constructor() {
      super()
        this.state = {
          username: '',
          email: '',
          password: ''
      }
    }

  setUserName(e) {
    this.setState({username: e.target.value})
  }

  setUserEmail(e) {
    this.setState({email: e.target.value})
  }

  setUserPassword(e) {
    this.setState({password: e.target.value})
  }



  render() {
     return (
    <div className="ui middle aligned center aligned grid auth-form">
      <div className="column">
        <h2 className="ui header">

          <div className="content">
            Sign-up for an account
          </div>
        </h2>
        <form className="ui large form" onSubmit={e => this.props.handleSignup(e, this.state)}>
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
       
            <button type="submit" className="ui fluid large teal submit button">Sign Up</button>
      </div>

      <div className="ui error message"></div>

    </form>

    <div className="ui message">
      Have an account? <Link to={'/login'} href="#">Log In</Link>
    </div>
  </div>
</div>
  );
  }
 
};

export default SignUp;