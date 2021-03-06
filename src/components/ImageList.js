import React from 'react'
import Image from './Image.js'
import store from '../store'

import { connect } from 'react-redux'

export default class ImageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: store.getState().image.images
    }
  }

  componentDidMount = () => {
    store.subscribe(() => {
      this.setState({
        images: store.getState().image.images
      })
    })
  }

  componentWillUnmount = () => {
    store.unsubscribe()
  }



  render() {
  	return (
  		<div className="image-list">
        {
          this.state.images.map((image, index) => (
            <Image src={ image.src } tags={ image.tags } captions={ image.captions } key={ index + image.src } />
          ))
        }
      </div>
  	)
  }
}

function mapStateToProps(state) {
  return {
    images: state.image.images,
  };
}

// export default connect(mapStateToProps)(ImageList)