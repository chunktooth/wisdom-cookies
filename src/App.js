import React, { Component } from 'react';
import { getQuotes } from './cleaners/getQuotes';
import './App.css';

class App extends Component {

  async componentDidMount() {
    const quotes = await getQuotes();
    console.log(quotes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wisdom Cookies</h1>
        </header>
      </div>
    );
  }
}

export default App;