import React from 'react';
import { Provider } from 'react-redux'

import store from './store'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Uploader from './components/Uploader'
import ImageList from './components/ImageList'
import Homepage from './components/Homepage'
import SideBar from './components/SideBar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false,
      userData: {},
    }
  }

  render() {
    let images = [
      {
        src: 'http://img.f3.thethao.vnecdn.net/2016/12/17/155556431283154118407944183196-7540-8644-1481984825_490x294.jpg',
        tags: ['hello1', 'hello2'],
        caption: 'Hello World 1'
      },
      {
        src: 'http://img.f29.vnecdn.net/2016/12/16/kostroma-6296-1481884038.jpg',
        tags: ['hello1', 'hello2'],
        caption: 'Hello World 1'
      }
    ]
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Login />
          <SideBar />
          <Homepage />
        </div>
      </Provider>
    );
  }
}

export default App;

        // <Uploader />
        // <ImageList images={ images } />
        // <main>
        //   {
        //     this.state.isAuthenticated
        //       ? <Uploader />
        //       : <Login update={this.updateAuthen.bind(this)}></Login>
        //   }
        // </main>
        // <Footer />