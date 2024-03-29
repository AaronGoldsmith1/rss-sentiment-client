import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './NavBar.css'

const Header = (props) => {
  function handleLogout() {
    localStorage.removeItem('currentUser')
    props.history.push('/')
    window.location.reload()
  }

  return (
    <>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui container">
          <div className="ui large inverted menu">
            <Link to={'/'} className={"item " + (props.location.pathname === '/' ? "active" : "")}>Home</Link>
            { props.currentUser &&
              <>
            <Link to={'/feeds'} className={"item " + (props.location.pathname === '/feeds' ? "active" : "")}>My Feeds</Link>
            <Link to={'/data'} className={"item " + (props.location.pathname === '/data' ? "active" : "")}>Data View</Link>
              </>
            }
            <div className="right item">
            { !props.currentUser ?
              <>
              <Link to={'/login'} className="ui inverted button login-button">Log in</Link>
              <Link to={'/signup'} className="ui inverted button">Sign Up</Link>
              </>
              :
              <Link to={'/'} onClick={handleLogout} className="ui inverted button">Log Out</Link>
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Header);