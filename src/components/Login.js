import React, { Component } from 'react'

export default class Login extends Component {
  render () {
    return (
      <button className="waves-effect waves-light btn-large" onClick={this.openLoginForm.bind(this)}>
        Login <i className="material-icons right">send</i>
      </button>
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

        window.FB.api(
          `/${response.authResponse.userID}/picture`,
          (response) => {
            if (response && !response.error) {
              this.props.update(true, {
                avatar: response.data.url,
              })
            }
          }
        );

        window.FB.api(
          `/${response.authResponse.userID}?fields=cover`,
          (response) => {
            if (response && !response.error) {
              this.props.update(true, {
                cover: response.cover.source,
              })
            }
          }
        );

      } else {
        console.log('Login failed!')
      }
    }, {scope: 'public_profile, email, user_friends, user_photos, user_posts, publish_actions'})

  }
}