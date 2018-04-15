import React, { Component } from 'react';
import { connect } from 'react-redux';
import { trashFromJar } from '../../actions';
import PropTypes from 'prop-types';
import './WisdomInJar.css';

export class WisdomInJar extends Component {

  removeFromJar = (id) => {
    console.log(id)
  }

  render() {
    const { wisdom } = this.props;
    console.log(wisdom)
   
    return (
      <div>
        <p className='wisdom-message'>{wisdom}</p>
        <button 
          onClick={this.removeFromJar(wisdom.id)}
          className='delete-btn'>[ X ]</button>
      </div>
    );
  } 
};

export const mapStateToProps = (state) => {
  return {
    wisdom: state.wisdom,
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
  trashFromJar: PropTypes.func
  // wisdomFromJar: PropTypes.oneOfType([
  //   PropTypes.object,
  //   PropTypes.array
  // ])
};