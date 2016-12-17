import React, { Component } from 'react'
import { Notification } from 'react-notification'
import axios from 'axios'

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
    }
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
    axios.post(`${this.props.userData.userID}/photos`, {
      caption: this.props.caption + this.props.tags.reduce((a, b) => `${a}, #${b}`, ''),
      privacy: this.state.privacy,
      url: this.props.image,
    }).then(() => {
      this.showNotification('Post success!')
    }, () => {
      this.showNotification('Failed')
    })
  }

  render() {
    return (
      <div>
        <input type="radio" group="privacy" onClick={this.updateChoice('privacy', 'EVERYONE').bind(this)}>EVERYONE</input>
        <input type="radio" group="privacy" onClick={this.updateChoice('privacy', 'ALL_FRIENDS').bind(this)}>All Friends</input>
        <input type="radio" group="privacy" onClick={this.updateChoice('privacy', 'FRIENDS_OF_FRIENDS').bind(this)}>Friends of friends</input>
        <input type="radio" group="privacy" onClick={this.updateChoice('privacy', 'SELF').bind(this)}>Self</input>

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