import React from 'react'
import $ from 'jquery'
window.$ = $
window.jQuery = $
import 'materialize-css'
window.Vel = require('materialize-css/js/velocity.min')

class SideBar extends React.Component {
  componentDidMount() {
    $(function() {
      $(".button-collapse").sideNav();
    })
  }

	render() {
		return (
      <div className="user-info">
        <ul id="slide-out" className="side-nav">
          <li>
            <div className="userView">
              <div className="background">
                <img src="images/office.jpg" role="img-background" />
              </div>
              <a href="#!user">
                <img className="circle" src="images/yuna.jpg" role="user" />
              </a>
              <a href="#!name">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#!email">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">cloud</i>First Link With Icon
            </a>
          </li>
          <li>
            <a href="#!">Second Link</a>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a className="subheader">Subheader</a>
          </li>
          <li>
            <a className="waves-effect" href="#!">Third Link With Waves</a>
          </li>
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse">
          <i className="material-icons">menu</i>
        </a>
      </div>
		)
	}
}

export default SideBar