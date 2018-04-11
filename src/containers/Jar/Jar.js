import React from 'react';
import emptyJar from '../../images/empty-jar.png';

export const Jar = () => {
  return (
    <div className='cookie-panel'>
      <img src={emptyJar}
        class='empty-jar'
        alt="A jar of collected wisdom" />
    </div>
  );
};