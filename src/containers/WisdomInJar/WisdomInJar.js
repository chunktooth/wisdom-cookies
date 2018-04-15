import React from 'react';
import { connect } from 'react-redux';
import { trashFromJar } from '../../actions';
import PropTypes from 'prop-types';
import './WisdomInJar.css';

export const WisdomInJar = ({ message, id }) => {

  const removeFromJar = (id) => {
    this.props.trashFromJar(id);
  };

  return (
    <div>
      <p className='wisdom-message'>
        {message}
      </p>
      <button 
        onClick={removeFromJar}
        className='delete-btn'>x</button>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    jar: state.jar
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    trashFromJar: (id) => (dispatch(trashFromJar(id)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WisdomInJar);

WisdomInJar.propTypes = {
  trashFromJar: PropTypes.func,
  message: PropTypes.string,
  id: PropTypes.string
};