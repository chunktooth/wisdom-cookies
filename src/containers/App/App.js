import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookie from '../Cookie/Cookie';
import Jar from '../Jar/Jar';
import { getWisdoms } from '../../apiCalls/getWisdoms';
import { getMoons } from '../../apiCalls/getMoons';
import { loadWisdoms, loadMoons } from '../../actions';
import dragon from '../../images/dragon.png';
import PropTypes from 'prop-types';
import './App.css';

export class App extends Component {
  
  async componentDidMount() {
    const wisdoms = await getWisdoms();    
    this.props.loadWisdoms(wisdoms);
    const moonphases = await getMoons();
    this.props.loadMoons(moonphases);
  }

  render() {
    return (
      <div className='App'>  
        <div className='left-column'>   
          <header className='App-header'>
            <h1 className="title">Wi$dom Co0kies</h1>
            <h4 className="under-title">
              Choose wisdom to guide your fortune
            </h4>
          </header>
          <img src={dragon}
            className='dragon'
            alt='A Chinese dragon soaring' />  
          <Cookie />
        </div>
        <div className='right-column'>
          <Jar />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    wisdoms: state.wisdoms,
    jar: state.jar,
    moonphases: state.moonphases
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    loadWisdoms: (wisdoms) => (dispatch(loadWisdoms(wisdoms))),
    loadMoons: (moonphases) => (dispatch(loadMoons(moonphases)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  loadWisdoms: PropTypes.func,
  loadMoons: PropTypes.func,
  wisdoms: PropTypes.array,
  jar: PropTypes.array
};