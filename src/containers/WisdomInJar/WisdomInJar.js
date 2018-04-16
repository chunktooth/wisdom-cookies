import React, { Component } from 'react';
import { connect } from 'react-redux';
import { trashFromJar } from '../../actions';
import PropTypes from 'prop-types';
import './WisdomInJar.css';

export class WisdomInJar extends Component {

  removeFromJar = () => {
    this.props.trashFromJar(this.props.wisdom.id);
  }

  render() {
    return (
      <div>
        <p className='wisdom-message'>
          {this.props.wisdom.message}
        </p>
        <button 
          onClick={this.removeFromJar}
          className='delete-btn'>[ X ]</button>
      </div>
    );
  } 
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
};