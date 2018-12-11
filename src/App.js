import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Main from './Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
