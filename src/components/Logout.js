import React, { Component } from 'react'
import store from '../store'

export default class Logout extends Component {
  render () {
    return (
      <button className="waves-effect waves-light btn-large red login" onClick={this.logout}>
        Logout <i className="material-icons right">send</i>
      </button>
    )
  }

  logout = () => {
    store.dispatch({
      type: 'REMOVE_USER',
    })
  }
}