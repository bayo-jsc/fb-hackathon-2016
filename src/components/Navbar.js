import React from 'react';

import './App.css';


class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">FaceTub</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
            <li><a href="#">Menu 3</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default App;
