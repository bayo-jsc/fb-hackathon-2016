import React from 'react'
import $ from 'jquery'
window.$ = $
window.jQuery = $
import 'materialize-css'
window.Vel = require('materialize-css/js/velocity.min')

class Homepage extends React.Component {
  componentDidMount() {
    $(document).ready(() => {
      $('.parallax').parallax()
    })
  }

	render() {
	    return (
	      <div className="parallax-container">
	        <div className="parallax">
	          <img src="background.jpg" role="background"/>
	        </div>
          <p>Auto-caption your images</p>
          <button className="btn-large">Begin Now</button>
	      </div>
	    )
	  }
}

export default Homepage