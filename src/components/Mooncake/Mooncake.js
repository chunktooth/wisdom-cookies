import React from 'react';
import PropTypes from 'prop-types';
import newMoon from '../../images/cake-crumbles.png';
import firstQuarter from '../../images/first-quarter.png';
import fullMoon from '../../images/full-cake.png';
import lastQuarter from '../../images/last-quarter.png';
import './Mooncake.css';

export const Mooncake = ({ phase }) => {    
  return (
    <div className='Mooncake'>
      {
        phase.code === 0 &&
        <img src={newMoon} 
          className='new-moon' 
          alt="An empty plate of cake crumbles" />
      }
      {
        phase.code === 1 &&
        <img src={firstQuarter} 
          className='first-quarter' 
          alt="The left half of mooncake is eaten" />
      }
      {
        phase.code === 2 &&
        <img src={fullMoon} 
          className='full-moon' 
          alt="A full mooncake" />
      }
      {
        phase.code === 3 &&
        <img src={lastQuarter} 
          className='last-quarter' 
          alt="The right half of mooncake is eaten" />
      }
      <h3 className='phase-name'>{phase.name}</h3>
      <p className='phase-date'>on {phase.date}</p>
    </div>
  );
};

Mooncake.propTypes = {
  phase: PropTypes.object
};