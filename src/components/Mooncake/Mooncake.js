import React from 'react';
import PropTypes from 'prop-types';
import newMoonCake from '../../images/cake-crumbles.png';
import firstQuaterCake from '../../images/first-quarter.png';
import fullMoonCake from '../../images/full-cake.png';
import lastQuarterCake from '../../images/last-quarter.png';
import newMoon from '../../images/new-moon.png';
import firstQuarter from '../../images/first-quarter-moon.png';
import fullMoon from '../../images/fullmoon.png';
import lastQuarter from '../../images/last-quarter-moon.png';
import './Mooncake.css';

export const Mooncake = ({ phase }) => {    
  return (
    <div className='Mooncake'>
      {
        phase.code === 0 &&
        <div>
          <img src={newMoonCake} 
            className='new-moon-cake' 
            alt="An empty plate of cake crumbles" />
          <img src={newMoon} 
            className='new-moon' 
            alt="Moon with slender outer crescent, in conjunction with the sun" />
        </div>
      }
      {
        phase.code === 1 &&
        <div>
          <img src={firstQuaterCake} 
            className='first-quarter-cake' 
            alt="The left half of mooncake is eaten" />
          <img src={firstQuarter} 
            className='first-quarter' 
            alt="The left half of mooncake is dark" />
        </div>
      }
      {
        phase.code === 2 &&
        <div>
          <img src={fullMoonCake} 
            className='full-moon-cake' 
            alt="A full mooncake" />
          <img src={fullMoon} 
            className='fullmoon' 
            alt="A round full moon" />  
        </div>
      }
      {
        phase.code === 3 &&
        <div>
          <img src={lastQuarterCake} 
            className='last-quarter-cake' 
            alt="The right half of mooncake is eaten" />
          <img src={lastQuarter} 
            className='last-quarter' 
            alt="The right half of mooncake is dark" />
        </div>
      }
      <h3 className='phase-name'>{phase.name}</h3>
      <p className='phase-date'>on {phase.date}</p>
    </div>
  );
};

Mooncake.propTypes = {
  phase: PropTypes.object
};