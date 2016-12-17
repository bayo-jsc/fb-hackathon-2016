import React from 'react'

class Image extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let tags = this.props.tags.forEach((tag) => (
      <div className="chip">
        <i className="close material-icons">close</i>
      </div>
    ))
    return (
      <div>
        <img className="materialboxed" width="650" src="{ this.props.src }" />
        <div className="tags">  
          { tags }
        </div>   
         
      </div>
    )
  }
}

export default Image