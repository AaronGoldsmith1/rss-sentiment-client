
import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui container">
          <div className="ui large inverted menu">
            <Link to={'/'} className="active item">Home</Link>
            { props.currentUser &&
              <>
            <Link to={'/feeds'} className="item">My Feeds</Link>
            <Link to={'/data'} className="item">Data View</Link>
              </>
            }
            <div className="right item">
            { !props.currentUser ?
              <>
              <Link to={'/login'} className="ui inverted button">Log in</Link>
              <Link to={'/signup'} className="ui inverted button">Sign Up</Link>
              </>
              :
              <Link to={'/'} className="ui inverted button">Log Out</Link>
            }

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;