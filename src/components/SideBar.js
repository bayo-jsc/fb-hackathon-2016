import React from 'react'
import $ from 'jquery'
window.$ = $
window.jQuery = $
import 'materialize-css'
window.Vel = require('materialize-css/js/velocity.min')

import store from '../store'

class SideBar extends React.Component {
  componentDidMount() {
    $(function() {
      $(".button-collapse").sideNav();
    })
  }

  constructor() {
    super()
    this.state = {
      userData: {}
    }

    store.subscribe(() => {
      this.setState({
        userData: store.getState().userState
      })
    })
  }

	render() {
		return (
      <div className="sidebar">
        <ul id="slide-out" className="side-nav">
          <li>
            <div className="userView">
              <div className="background">
                <img src="wallpaper.jpg" role="wallpaper" />
              </div>
              {
                !this.state.userData.isAuthenticated
                  ? 
                  : 
              }
              <a href="#">
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
        <a href="#" data-activates="slide-out" className="button-collapse indigo btn-large">
          <i className="material-icons">menu</i>
        </a>
      </div>
		)
	}
}

export default SideBar