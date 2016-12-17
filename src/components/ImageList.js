import React from 'react'
import Image from './Image.js'

class ImageList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  	let images = this.props.images.map((image) => (
  			<Image src={ image.src } tags={ image.tags } caption={ image.caption } />
  	)) 

  	return (
  		<div className="image-list">
        { images }
      </div>
  	)
  }
}

export default ImageList