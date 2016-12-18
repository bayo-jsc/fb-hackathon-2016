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
      isLoading: false,
      userData: store.getState().userState
    }
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
<<<<<<< HEAD
    this.setState({
      isLoading: true
    })

=======
    let tags = this.props.tags.map((tag) => {
      let listWords = tag.split(' ')
      return listWords.map((word) => word[0].toUpperCase() + word.slice(1)).join('')
    })
>>>>>>> 5126ba31d474ab6cf6f21ad37e1822a08a0aeb1d
    axios.post(`https://graph.facebook.com/v2.8/${this.state.userData.id}/photos`, {
      caption: this.props.caption
        + tags.reduce((a, b, index) => {
          if (index) return `${a}, #${b}`
          else return `${a}`
        }, ''),
      url: this.props.src,
      access_token: this.state.userData.token,
    }).then(() => {
      this.showNotification('Post success!')
    }, () => {
      this.showNotification('Failed')
    }).then(() => {
    this.setState({
      isLoading: false
    }) 
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
        {
          this.state.isLoading 
            ? 'Uploading' 
            : <button className="btn blue" style={{ marginTop: '10px' }} onClick={this.postToFacebook.bind(this)}>Post to Facebook</button>
        }

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