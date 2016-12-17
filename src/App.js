import React from 'react';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Uploader from './components/Uploader'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Uploader />
        <Footer />
      </div>
    );
  }
}

export default App;
