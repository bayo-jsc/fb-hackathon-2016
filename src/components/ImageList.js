import React from 'react'
import Image from './Image.js'
import store from '../store'

import { connect } from 'react-redux'

class ImageList extends React.Component {
  constructor() {
    super()
    this.state = {
      images: store.getState().image,
    }
  }


  render() {
  	return (
  		<div className="image-list">
        { this.props.images.map((image) => (
        <Image src={ image.src } tags={ image.tags } caption={ image.caption } key={ image.src } />
    ))  }
      </div>
  	)
  }
}

function mapStateToProps(state) {
  return {
    images: state.image.images,
  };
}

export default connect(mapStateToProps)(ImageList)