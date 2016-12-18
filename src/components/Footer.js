import React from 'react'

class Footer extends React.Component {
  render() {
  return (
      <footer className="page-footer indigo">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">&copy; Bayo</h5>
              <p className="grey-text text-lighten-4"><a href="http://www.bayo.vn" target="_blank">Bayo</a></p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text"></h5>
              <ul>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer