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
      <div className="image indigo lighten-5">
        <img className="materialboxed" src={ this.props.src } />
        <div className="tags">  
          { tags }
        </div> 
        <div className="caption indigo lighten-3">
          { this.props.caption }
        </div>

        <div className="divider" />
      </div>
    )
  }
}

export default Image