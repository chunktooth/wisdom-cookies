import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import emptyJar from '../../images/empty-jar.png';

export const Jar = () => {
  return (
    <div className='jar'>
      <img src={emptyJar}
        class='empty-jar'
        alt="A jar of collected wisdom" />
    </div>
  );
};