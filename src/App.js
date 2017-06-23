import React, { Component } from 'react';
import styled from "styled-components";
/*import './style.css';*/
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

import Complexes from './Complexes/List';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Complexes} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
