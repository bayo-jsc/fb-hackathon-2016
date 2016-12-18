import React, { Component } from 'react'
import store from '../store'

export default class Login extends Component {
  render () {
    return (
      <button className="waves-effect waves-light btn-large login" onClick={this.openLoginForm.bind(this)}>
        Login <i className="material-icons left">send</i>
      </button>
    )
  }

  openLoginForm = () => {
    window.FB.login((response) => {
      if (response.authResponse) {
        store.dispatch({
          type: 'ADD_USER',
          user: {
            isAuthenticated: true,
            id: response.authResponse.userID,
            token: response.authResponse.accessToken,
          },
        })

        window.FB.api(
          `/${response.authResponse.userID}/picture`,
          (response) => {
            if (response && !response.error) {
              store.dispatch({
                type: 'ADD_USER',
                user: {
                  avatar: response.data.url,
                }
              })
            }
          }
        )

        window.FB.api(
          `/${response.authResponse.userID}?fields=cover`,
          (response) => {
            if (response && !response.error) {
              const cover = response.cover ? response.cover.source : ''
              store.dispatch({
                type: 'ADD_USER',
                user: {
                  cover,
                }
              })
            }
          }
        )
      } else {
        console.log('Login failed!')
      }
    }, {scope: 'public_profile, email, user_friends, user_photos, user_posts, publish_actions'})

  }
}