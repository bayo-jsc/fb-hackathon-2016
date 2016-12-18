import React from 'react'

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: this.props.tags
    }
  }

  render() {
    let tags = this.state.tags.map((tag, index) => (
      <div className="chip" key={ tag }>
        { tag }
        <i className="close material-icons" onClick={ this.deleteTag.bind(this, index) }>close</i>
      </div>
    ))

    let captions = this.state.captions.map((caption, index) => (
      <div className="caption indigo lighten-3">
        { caption }
      </div>
    ))
    return (
      <div className="image indigo lighten-5">
        <img className="materialboxed" src={ this.props.src } alt={ this.props.src } />
        <div className="tags">  
          { tags }
        </div> 
        { captions }

        <div className="divider" />
      </div>
    )
  }

  deleteTag(index) {
    let tags = this.state.tags.slice()
    tags.splice(index, 1)
    this.setState({ tags })
  }
}

export default Image