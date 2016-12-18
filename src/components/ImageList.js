import React from 'react'
import Image from './Image.js'
import store from '../store'

class ImageList extends React.Component {
  constructor() {
    super()
    this.state = {
      images: store.getState().image.images,
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        images: store.getState().image.images
      })
    }) 
  }
  render() {
  	let images = this.state.images.map((image) => (
  			<Image src={ image.src } tags={ image.tags } caption={ image.caption } key={ image.src } />
  	)) 

  	return (
  		<div className="image-list">
        { images }
      </div>
  	)
  }
}

export default ImageList