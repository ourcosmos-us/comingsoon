import React, { Component } from 'react';
import { Header, Footer } from './commons';
import RayBradbury from './feature';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RayBradbury />
        <Footer />
      </div>
    );
  }
}

export default App;
