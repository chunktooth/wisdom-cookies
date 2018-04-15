import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookie from '../Cookie/Cookie';
import Jar from '../Jar/Jar';
import { getWisdoms } from '../../cleaners/getWisdoms';
// import { getAstro } from '../../cleaners/getAstro';
import { loadWisdoms } from '../../actions';
import dragon from '../../images/dragon.png';
import jar from '../../images/empty-jar.png';
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

        <div className='left-column'>
          <header className='App-header'>
            <h1 className="title">Wisdom Co0kies</h1>
            <h4 className="under-title">
              Choose wisdom to guide your fortune
            </h4>
            <Cookie />
            <div className='keepjar-btn'>
              <NavLink to='/jar'
                id='jar'
                className='nav'>
                <img src={wisdomJar}
                  className='wisdom-jar' 
                  alt="Revisit a jar of wisdoms" />
                <p className='under-button'>
                  {`(${this.props.jar.length})
                  Wisdom in Jar`}
                </p>
              </NavLink>
            </div>  
          </header>
          <img src={dragon}
            className='dragon'
            alt='An silhouette of Chinese dragon' />
        </div> 

        <div className='right-column'>
          <img src={jar}
            className='empty-jar'
            alt="A jar of wisdom collection" />
          <Jar />
        </div>

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