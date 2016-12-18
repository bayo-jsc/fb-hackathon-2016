import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import store from './store'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Logout from './components/Logout'
import Uploader from './components/Uploader'
import ImageList from './components/ImageList'
import Homepage from './components/Homepage'
import SideBar from './components/SideBar'
import PostToFacebook from './components/PostToFacebook'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      userData: {},
    }

    store.subscribe(() => {
      this.setState({
        userData: store.getState().userState
      })
    })
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
          {this.state.userData.isAuthenticated ? <Logout /> : <Login />}
          <SideBar />
          <div className="container">
            <Router history={hashHistory}>
              <Route>
                <Route path="/" component={Homepage}></Route>
                <Route path="/upload" component={Uploader}></Route>
                <Route path="/share" component={PostToFacebook}></Route>
                <Route path="/list" component={ImageList}></Route>
              </Route>
            </Router>
          </div>
          <Footer />
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