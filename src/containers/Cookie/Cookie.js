import React from 'react';
import PropTypes from 'prop-types';

export const Cookie = ({quotes}) => {
  console.log(quotes);

  const openCookie = () => {
    const randomKey = Math.floor(Math.random() * quotes.length);
    let wisdom = quotes[randomKey].message;
    console.log(wisdom);
  }; 

  return (
    <div>
      <p></p>
      <button 
        onClick={() => openCookie()}>
        Eat another cookie 
      </button>
    </div>
  );
};

Cookie.propTypes = {
  quotes: PropTypes.array
};