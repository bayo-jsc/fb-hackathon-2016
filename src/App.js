import React from 'react';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Video from './components/Video'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <button></button>
        <main>
          <Video></Video>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
