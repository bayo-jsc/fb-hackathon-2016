import React, { Component } from 'react'
import { Notification } from 'react-notification'
import axios from 'axios'
import { connect } from 'react-redux'

import store from '../store'

const privacy = {
  EVERYONE: 'EVERYONE',
  ALL_FRIENDS: 'ALL_FRIENDS',
  FRIENDS_OF_FRIENDS: 'FRIENDS_OF_FRIENDS',
  SELF: 'SELF',
}

class PostToFacebook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      where: 'user',
      privacy: 'EVERYONE',
      noti: {
        isActive: false,
        message: '',
      },
      userData: {},
    }
  }

  componentDidMount = () => {
    store.subscribe(() => {
      this.setState({
        userData: store.getState().userState
      })
    })
  }

  updateChoice(kind, choice) {
    this.setState({
      [kind]: choice,
    })
  }

  showNotification(message) {
    this.setState({
      noti: {
        isActive: true,
        message,
      },
    })
  }

  postToFacebook() {
    axios.post(`${this.state.userData.userID}/photos`, {
      caption: this.props.caption
        + this.props.tags.reduce((a, b, index) => {
          if (index) return `${a}, #${b}`
          else return `${a}`
        }, ''),
      privacy: this.state.privacy,
      url: this.props.src,
      access_token: this.state.userData.token,
    }).then(() => {
      this.showNotification('Post success!')
    }, () => {
      this.showNotification('Failed')
    })
  }

  render() {
    return (
      <div>
        <input
          type="radio"
          group="privacy"
          onClick={this.updateChoice('privacy', 'EVERYONE').bind(this)}
          selected={this.state.privacy === 'EVERYONE'}
        >
          EVERYONE
        </input>
        <input type="radio" group="privacy" onClick={this.updateChoice('privacy', 'ALL_FRIENDS').bind(this)}
               selected={this.state.privacy === 'ALL_FRIENDS'}>All Friends</input>
        <input type="radio" group="privacy" onClick={this.updateChoice('privacy', 'FRIENDS_OF_FRIENDS').bind(this)}
               selected={this.state.privacy === 'FRIENDS_OF_FRIENDS'}>Friends of friends</input>
        <input type="radio" group="privacy" onClick={this.updateChoice('privacy', 'SELF').bind(this)}
               selected={this.state.privacy === 'SELF'}>Self</input>

        <button onClick={this.postToFacebook.bind(this)}>Post to Facebook</button>

        <Notification
          isActive={this.state.noti.isActive}
          message={this.state.noti.message}
        />
      </div>
    )
  }
}

PostToFacebook.PropTypes = {
  userData: React.PropTypes.object,
  caption: React.PropTypes.string,
  image: React.PropTypes.string,
  tags: React.PropTypes.array,
}

export default PostToFacebook