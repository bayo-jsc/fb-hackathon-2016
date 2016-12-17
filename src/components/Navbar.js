import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">FaceTub</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
            <li><a href="#">Menu 3</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
