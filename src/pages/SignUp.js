import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui   header">

          <div class="content">
            Sign-in to your account
          </div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">

            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="username" placeholder="User Name"/>
              </div>
            </div>
           
            <div class="field">
              <div class="ui left icon input">
                <i class="at icon"></i>
                <input type="text" name="email" placeholder="E-mail address"/>
              </div>
            </div>
            
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="Password"/>
              </div>
            </div>
       
            <div class="ui fluid large teal submit button">Sign Up</div>
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      Have an account? <Link to={'/login'} href="#">Log In</Link>
    </div>
  </div>
</div>
  );
};

export default SignUp;