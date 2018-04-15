import React from 'react';
import { connect } from 'react-redux';
import WisdomInJar from '../WisdomInJar/WisdomInJar';
import PropTypes from 'prop-types';
import './Jar.css';

export const Jar = ({ jar }) => {
  const wisdomCollection = jar.map(wisdom => {

    return <WisdomInJar 
      {...wisdom}
      key={wisdom.id} />;
  }); 

  return (
    <div className='wisdom-collection'>
      {wisdomCollection}
    </div>
  );  
};

export const mapStateToProps = (state) => {
  return {
    jar: state.jar
  };
};

export default connect(mapStateToProps)(Jar);

Jar.propTypes = {
  jar: PropTypes.array
};