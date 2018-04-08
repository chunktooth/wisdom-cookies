import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { getQuotes } from '../../cleaners/getQuotes';
import { Jar } from '../Jar/Jar';
import './App.css';

export class App extends Component {

// async componentDidMount() {
//   const quotes = await getQuotes();
//   console.log(quotes);
// }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wisdom Cookies</h1>
        </header>
        <Route exact path='/'
          component={App} 
        />
        <Route exact path='/jar'
          component={Jar} 
        />
      </div>
    );
  }
}