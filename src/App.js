import React, { Component } from 'react';
import Header from './Components/Header'
import Flashcard from './Components/Flashcard'
import './App.css';
import Buttons from './Components/Buttons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Buttons/>

      </div>
    );
  }
}

export default App;
