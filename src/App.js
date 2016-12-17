import React from 'react';
import $ from 'jquery'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Uploader from './components/Uploader'
import Image from './components/Image'

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
    let tags = ['doing', 'something']
    return (
      <div className="App">
        <Navbar />
        <Uploader />
        <Image src="http://img.f3.thethao.vnecdn.net/2016/12/17/155556431283154118407944183196-7540-8644-1481984825_490x294.jpg" tags={ tags } caption="Hello World"/>
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
