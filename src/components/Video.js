import React from 'react'
import StreamURL from './StreamURL'

class Video extends React.Component {
  constructor() {
    super()
    this.state = { streamURL: '' }
    this.updateStreamURL = this.updateStreamURL.bind(this)
  }
	render() {
	  return (
	    <div>
      { !this.state.streamURL
          ? <button onClick={this.openFBLive.bind(this)}>Live</button>
          : <StreamURL streamURL={this.state.streamURL}></StreamURL>
      }
      </div>
    )
  }

  updateStreamURL(streamURL) {
    this.setState({
      streamURL
    })
  }

  openFBLive() {
    console.log(Video)
    window.FB.ui({
      display: 'popup',
      method: 'live_broadcast',
      phase: 'create',
    }, (response) => {
      if (!response.id) {
        alert('dialog canceled')
        return
      }

      alert('stream url:' + response.stream_url)
      this.updateStreamURL(response.stream_url)
      // TODO: Send to server
    })
  }
}

export default Video