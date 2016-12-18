import React from 'react'
import FineUploaderTraditional from 'react-fine-uploader'
import Gallery from 'react-fine-uploader/components/gallery'
import store from '../store'

const uploader = new FineUploaderTraditional({
  options: {
    request: {
      endpoint: 'http://test.bayo.vn/api/upload/images',
      inputName: 'images[]'
    },
    callbacks: {
      onComplete(id, name, response, xhr) {
        console.log(response)
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
      <Gallery uploader={ uploader } />
    )
	}
}

export default Uploader