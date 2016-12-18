import React from 'react'
import FineUploaderTraditional from 'react-fine-uploader'
import Gallery from 'react-fine-uploader/components/gallery'
import store from '../store'
import { Router, Link } from 'react-router'

const uploader = new FineUploaderTraditional({
  options: {
    request: {
      endpoint: 'http://test.bayo.vn/api/upload/images',
      inputName: 'images[]'
    },
    callbacks: {
      onComplete(id, name, response, xhr) {
        console.log(response.images[0])
        store.dispatch({
          type: 'ADD_IMAGE',
          image: response.images[0]
        })
      },

      onAllComplete(idList, failed) {
        console.log(idList, failed)
      }
    }
  }
})

class Uploader extends React.Component {
	render() {
    return (
      <div className="uploader" style={{ textAlign: 'center' }}>
        <Gallery uploader={ uploader } />
        <Link to="/list" className="btn-large" style={{ margin: '10px auto' }}>View Images</Link>
      </div>
    )
	}
}

export default Uploader