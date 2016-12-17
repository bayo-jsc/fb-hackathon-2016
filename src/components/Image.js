import React from 'react'

class Image extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let tags = this.props.tags.map((tag) => (
      <div className="chip" key={ tag }>
        { tag }
        <i className="close material-icons">close</i>
      </div>
    ))
    return (
      <div className="image">
        <img className="materialboxed" src={ this.props.src } />
        <div className="tags">  
          { tags }
        </div> 
        <div className="caption">
          { this.props.caption }
        </div>
      </div>
    )
  }
}

export default Image