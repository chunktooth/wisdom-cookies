import React from 'react';
import PropTypes from 'prop-types';
// import newMoon from '../../images/new-cake.png';
// import firstQuarter from '../../images/first-quarter.png';
import moonCake from '../../images/full-cake.png';
// import fullMoon from '../../images/full-cake.png';
// import lastQuarter from '../../images/last-quarter.png';
import './Mooncake.css';

export const Mooncake = ({ phase }) => {
  console.log(phase.code)
  // let moonCake;
  // moonCake = phase.code === 0 ? 'newMoon' : '';
  //   moonCake = phase.code === 1 ? 'firstQuarter' : 'moonCake';
  //   moonCake = phase.code === 2 ? 'fullMoon' : 'moonCake';
  //   moonCake = phase.code === 3 ? 'lastQuarter' : 'moonCake';

  return (
    <div className='Mooncake'>
      <img src={moonCake} 
        className='moon' 
        alt="Four different mooncakes for each type of moonphase" />
      <h3 className='phase-name'>{phase.name}</h3>
      <p className='phase-date'>{phase.date}</p>
    </div>
  );
};

Mooncake.propTypes = {
  phase: PropTypes.object
};