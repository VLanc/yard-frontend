import React, { Component } from 'react';
/*import './style.css';*/
import Header from './Header';
import Logo from './Logo';
import Cards from './Cards';
import Discover from './Discover';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Logo />
        <Discover />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
