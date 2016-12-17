import React from 'react'
import FineUploaderTraditional from 'react-fine-uploader'
import Gallery from 'react-fine-uploader/components/gallery'

const uploader = new FineUploaderTraditional({
  options: {
    request: {
      endpoint: 'http://test.bayo.vn/api/upload/images',
      inputName: 'images[]'
    },
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