import React, { Component } from 'react';
import { Header, Footer, Nav, Body } from './template';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  goToPage = page =>{
    this.setState({
      currentPage:"login"
    })
  }
  render() {
    return (
      <Router>
        <Header />
        <Nav page={this.state.currentPage} changePage ={this.goToPage}/>
        <Body page={this.state.currentPage}/>
        <Footer />
      </Router>
    );
  }
}



export default App;
