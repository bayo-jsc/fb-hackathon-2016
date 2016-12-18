import React, { Component } from 'react'
import { Notification } from 'react-notification'
import axios from 'axios'
import { connect } from 'react-redux'

import store from '../store'

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
    console.log('Done constructor')
  }

  componentDidMount = () => {
    store.subscribe(() => {
      this.setState({
        userData: store.getState().userState
      })
    })
  }

  updateChoice = (kind, choice) => {
    this.setState({
      [kind]: choice,
    })
  }

  showNotification = (message) => {
    this.setState({
      noti: {
        isActive: true,
        message,
      },
    })
  }

  postToFacebook = () => {
    axios.post(`https://graph.facebook.com/v2.8/${this.state.userData.userID}/photos`, {
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
          name="privacy"
          onClick={this.updateChoice.bind(this, 'privacy', 'EVERYONE')}
          selected={this.state.privacy === 'EVERYONE'}
        />
          
        <input type="radio" name="privacy" onClick={this.updateChoice.bind(this, 'privacy', 'ALL_FRIENDS')}
               selected={this.state.privacy === 'ALL_FRIENDS'} />
        <input type="radio" name="privacy" onClick={this.updateChoice.bind(this, 'privacy', 'FRIENDS_OF_FRIENDS')}
               selected={this.state.privacy === 'FRIENDS_OF_FRIENDS'} />
        <input type="radio" name="privacy" onClick={this.updateChoice.bind(this, 'privacy', 'SELF')}
               selected={this.state.privacy === 'SELF'} />

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
  caption: React.PropTypes.string,
  image: React.PropTypes.string,
  tags: React.PropTypes.array,
}

export default PostToFacebook