
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
<div class="ui vertical inverted sidebar menu left">
  <a class="active item">Home</a>
  <a class="item">Login</a>
  <a class="item">Signup</a>
</div>

<div className="pusher">
<div class="ui inverted vertical masthead center aligned segment">
    <div class="ui container">
      <div class="ui large inverted menu">
        <Link to={'/'} class="active item">Home</Link>
        <Link class="item">My Feeds</Link>
        <Link class="item">Data View</Link>
        <div class="right item">
          <Link to={'/login'} class="ui inverted button">Log in</Link>
          <Link to={'/signup'} class="ui inverted button">Sign Up</Link>
        </div>
      </div>
    </div>

  </div>
</div>
    </>
  );
};

export default Header;