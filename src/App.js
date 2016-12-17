import React from 'react';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
