import React from 'react';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Uploader from './components/Uploader'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false,
      userData: {},
    }
  }

  updateAuthen(isAuthenticated, userData) {
    this.setState({
      isAuthenticated,
      userData,
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          {
            this.state.isAuthenticated
              ? <Uploader />
              : <Login update={this.updateAuthen.bind(this)}></Login>
          }
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
