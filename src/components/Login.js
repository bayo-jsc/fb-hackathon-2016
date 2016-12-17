import React, { Component } from 'react'

export default class Login extends Component {
  render () {
    return (
      <button onClick={this.openLoginForm.bind(this)}>Login</button>
    )
  }

  openLoginForm () {
    window.FB.login((response) => {
      if (response.authResponse) {
        const fbUserData = {
          id: response.authResponse.userID,
          token: response.authResponse.accessToken,
        }

        this.props.update(true, fbUserData)
      } else {
        console.log('Login failed!')
      }
    }, {scope: 'public_profile, email, user_friends, user_photos, user_posts, publish_actions'})

  }
}