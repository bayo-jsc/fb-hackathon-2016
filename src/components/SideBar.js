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
                <img src="wallpaper.jpg" role={
                  this.state.userData.isAuthenticated
                  ? this.state.userData.cover : "wallpaper"
                } />
              </div>
              {
                this.state.userData.isAuthenticated
                  ?
                  <div> 
                    <a href="#">
                      <img className="circle" src={ this.state.userData.avatar } role="user" />
                    </a>
                    <a href="#">
                      <span className="white-text name">John Doe</span>
                    </a>
                  </div>
                  : ''
              }
              
            </div>
          </li>
          <li>
            <a href="/#/upload">
              <i className="material-icons">publish</i>Upload
            </a>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a className="subheader">Setting</a>
          </li>
          <li>
            {
              this.state.userData.isAuthenticated 
              ? <a className="waves-effect" href="#!">Logout</a>
              : <a className="waves-effect" href="">Login</a>
            }
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