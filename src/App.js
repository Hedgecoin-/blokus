import React, { Component } from 'react';

import Header from './components/Header';
import Board from './components/Board';
import Controller from './components/Controller';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Controller />
        <Board />
      </div>
    );
  }
}

export default App;
