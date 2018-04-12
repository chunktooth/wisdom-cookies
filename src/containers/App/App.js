import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Cookie } from '../Cookie/Cookie';
import { Jar } from '../Jar/Jar';
import dragon from '../../images/dragon.png';
import wisdomJar from '../../images/wisdom-jar.png';
import toJar from '../../images/put-inna-jar.png';
import eatCookie from '../../images/eat-cookie.png';
import './App.css';

export class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='left-column'>
          <img src={dragon}
            className='dragon'
            alt='An sillhouete of Chinese dragon' />
        </div>

        <div className='main'>
          <header className='App-header'>
            <h1 className="title">Wisdom Co0kies</h1>
            <h4 className="under-title">Choose wisdom to guide your fortune</h4>
          </header>   
          <Cookie ref='child'/>
        </div>

        <div className='right-column'>

          <div className='keepjar-btn'>
            <NavLink
              to='/jar'
              id='jar'
              className='nav'>
              <img src={wisdomJar}
                className='wisdom-jar' 
                alt="Revisit a jar of wisdom" />
              <p className='under-button'>0 Wisdom in Jar</p>
            </NavLink>   
          </div>

          <div className='cookie-btn'>
            <img src={eatCookie}
              className='eat-cookie'
              alt="More wisdom to be had"
              onClick={() => this.refs.child.eatCookie()}/>
            <p className='btn-txt'>Eat another cookie</p>
          </div>

          <div className='putjar-btn'>
            <img
              src={toJar}
              className='to-jar'
              alt="A jar for many wisdoms"
              onClick={this.props.keepInJar} />
            <p className='btn-txt'>Keep wisdom in a jar</p>
          </div>

        </div>


        <Route exact path='/'
          component={Cookie} />
        <Route exact path='/jar'
          render={() => <Jar /> }/>
      </div>
    );
  }
}