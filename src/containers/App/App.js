import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Cookie } from '../Cookie/Cookie';
import { Jar } from '../Jar/Jar';
import './App.css';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wisdom Cookies</h1>
        </header>
        <NavLink
          to='/jar'
          id='jar'>
          View Jar
        </NavLink>
        <Route exact path='/'
          component={Cookie} />
        <Route exact path='/jar'
          component={Jar} />
      </div>
    );
  }
}