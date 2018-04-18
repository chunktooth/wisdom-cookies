import React from 'react';
import PropTypes from 'prop-types';
import './Mooncake.css';

export const Mooncake = ({ phase }) => {
  return (
    <div className='Mooncake'>
      <h3 className='phase-name'>{phase.name}</h3>
      <p className='phase-date'>{phase.date}</p>
    </div>
  );
};

Mooncake.propTypes = {
  phase: PropTypes.object
};