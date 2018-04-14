import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookie from '../Cookie/Cookie';
import Jar from '../Jar/Jar';
import { getWisdoms } from '../../cleaners/getWisdoms';
import { loadWisdoms } from '../../actions';
import dragon from '../../images/dragon.png';
import wisdomJar from '../../images/wisdom-jar.png';
import eatCookie from '../../images/eat-cookie.png';
import PropTypes from 'prop-types';
import './App.css';

export class App extends Component {
  
  async componentDidMount() {
    const wisdoms = await getWisdoms();
    this.props.loadWisdoms(wisdoms)
  }

  render() {

    return (
      <div className='App'>

        <div className='left-column'>
          <img src={dragon}
            className='dragon'
            alt='An silhouette of Chinese dragon' />
        </div>

        <div className='main'>
          <header className='App-header'>
            <h1 className="title">Wisdom Co0kies</h1>
            <h4 className="under-title">Choose wisdom to guide your fortune</h4>
          </header>
          <Cookie />
        </div>     

        <div className='right-column'>
          <div className='keepjar-btn'>
            <NavLink
              to='/jar'
              id='jar'
              className='nav'>
              <img src={wisdomJar}
                className='wisdom-jar' 
                alt="Revisit a jar of wisdoms" />
              <p className='under-button'>{`(${this.props.jar.length}) Wisdom in Jar`}</p>
              <Route exact path='/jar'
                component={ Jar } />
            </NavLink>  
          </div>

        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
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
  keepWisdom: PropTypes.func,
  wisdoms: PropTypes.array
};