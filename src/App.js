import React, { Component } from 'react';
import { Header, Footer, Nav, Body } from './template';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Router>
        <Header />
        <Nav />
        <Body />
        <Footer />
      </Router>
    );
  }
}



export default App;
