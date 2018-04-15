import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookie from '../Cookie/Cookie';
import Jar from '../Jar/Jar';
import { getWisdoms } from '../../cleaners/getWisdoms';
// import { getAstro } from '../../cleaners/getAstro';
import { loadWisdoms } from '../../actions';
import dragon from '../../images/dragon.png';
import wisdomJar from '../../images/wisdom-jar.png';

import PropTypes from 'prop-types';
import './App.css';

export class App extends Component {
  
  async componentDidMount() {
    const wisdoms = await getWisdoms();    
    this.props.loadWisdoms(wisdoms);
    // const astro = await getAstro();
    // console.log(astro);
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className="title">Wi$dom Co0kies</h1>
          <h4 className="under-title">
            Choose wisdom to guide your fortune
          </h4>
        </header>
       
       <div className='keep-injar-btn'>
        <NavLink to='/jar'
          id='jar'
          className='nav'>
          <img src={wisdomJar}
            className='wisdom-jar' 
            alt="Revisit a jar of wisdoms" />
          <p className='btn-txt'>
            {`(${this.props.jar.length})
            Wisdom in Jar`}
          </p>
        </NavLink>
      </div>
      
      <div className='columns'> 
        <div className='left-column'> 
          <Cookie />
        </div>
        <div className='right-column'>
        </div>
          <Route exact path='/cookie'
            component={ Jar } />

      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    wisdoms: state.wisdoms,
    jar: state.jar
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    loadWisdoms: (wisdoms) => (dispatch(loadWisdoms(wisdoms)))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  loadWisdoms: PropTypes.func,
  wisdoms: PropTypes.array,
  jar: PropTypes.array
};