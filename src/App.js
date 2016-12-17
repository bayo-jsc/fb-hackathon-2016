import React from 'react';
import $ from 'jquery'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Uploader from './components/Uploader'
import Image from './components/Image'

class App extends React.Component {
  constructor() {
    super()
    // $('.chips').material_chip();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Uploader />
        <Image />
        <Footer />
      </div>
    );
  }
}

export default App;
