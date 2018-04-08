import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { getQuotes } from '../../cleaners/getQuotes';
import { loadQuotes } from '../../actions';
import { connect } from 'react-redux';
import { Cookie } from '../Cookie/Cookie';
import { Jar } from '../Jar/Jar';
import './App.css';

export class App extends Component {

  async componentDidMount() {
    const quotes = await getQuotes();
    this.props.loadQuotes(quotes);
  }

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
          render={() => 
            <Cookie quotes={this.props.quotes} /> 
          }
        />
        <Route exact path='/jar'
          component={Jar} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    loadQuotes: (quotes) => (dispatch(loadQuotes(quotes)))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));