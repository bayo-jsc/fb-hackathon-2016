import React from 'react';
import { Link } from 'react-router'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <div className="nav-wrapper indigo darken-2">
            <a href="#" className="brand-logo center">ImageCap</a>
          </div>
        </nav>
        <div className="fixed-action-btn horizontal">
          <a className="btn-floating btn-large red">
            <i className="large material-icons">menu</i>
          </a>
          <ul>
            <li>
              <a href="/upload" className="btn-floating green">
                <i className="material-icons">publish</i>
              </a>
            </li>
            <li>
              <a href="/share" className="btn-floating blue">
                <i className="material-icons">share</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;
