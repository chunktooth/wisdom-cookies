import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { keepWisdom, trashWisdom } from '../../actions'
import emptyJar from '../../images/empty-jar.png';
import PropTypes from 'prop-types';
import './Jar.css';

export class Jar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='jar'>
        <div className='cookie-btn'>
          <img src={eatCookie}
            className='eat-cookie'
            alt="More wisdom to be had"
            onClick={this.eatCookie} />
          <p className='btn-txt'>Eat another cookie</p>
        </div>
        <div>
          <img src={emptyJar}
            class='empty-jar'
            alt="A jar of collected wisdom" />
        </div>
      </div>
    );  
  }
}

export const mapStateToProps = (state) => {
  return {
    jar: state.jar,
    wisdom: state.wisdom
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    keepWisdom: (wisdom) => (dispatch(keepWisdom(wisdom))),
    trashWisdom: (wisdom) => (dispatch(trashWisdom(wisdom)))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Jar));

Jar.propTypes = {
  keepWisdom: PropTypes.func,
  trashWisdom: PropTypes.func,
  wisdoms: PropTypes.array
};