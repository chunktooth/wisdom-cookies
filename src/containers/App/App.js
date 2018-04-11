import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Cookie } from '../Cookie/Cookie';
import { Jar } from '../Jar/Jar';
import dragon from '../../images/dragon.png';
import wisdomJar from '../../images/wisdom-jar.png'
import './App.css';

export class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='left-column'>
          <img src={dragon}
            class='dragon'
            alt='An sillhouete of Chinese dragon' />
        </div>
        <div className='main'>
        <header className='App-header'>
          <h1 className="title">Wisdom Co0kies</h1>
          <h4 className="under-title">Choose wisdom to guide your fortune</h4>
        </header>
        </div>
        <div className='clickable'>
            <NavLink
              to='/jar'
              id='jar'
              class='nav'>
              <img src={wisdomJar}
                class='wisdom-jar' 
                alt='Revisit a jar of wisdom' />
              <p className='under-button'>0 Wisdom in Jar </p>
              <p className='pop-up'>Revisit ol' Wisdom</p>
            </NavLink>   
          </div>
        <Route exact path='/'
          component={Cookie} />
        <Route exact path='/jar'
          component={Jar} />
      </div>
    );
  }
}