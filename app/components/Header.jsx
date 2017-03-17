import React from 'react';
import {Link} from 'react-router';

const Header = React.createClass({
  render() {
    return(
      <header className="header container-fluid">
        <div className="container">
          <div className="header-title">
            <p>React App for Yalantis</p>
          </div>
          <nav className="navigation ">
            <ul>
              <li><Link activeClassName="active" to="/images">Cards</Link></li>
              <li><Link activeClassName="active" to="/admin">Admin</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
});

export default Header;