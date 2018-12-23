import React, { Component } from 'react';
import { Footer } from './commons';
import RayBradbury from './feature';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RayBradbury />
        <Footer />
      </div>
    );
  }
}

export default App;
