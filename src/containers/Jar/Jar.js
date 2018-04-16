import React, { Component } from 'react';
import { connect } from 'react-redux';
import WisdomInJar from '../WisdomInJar/WisdomInJar';
import PropTypes from 'prop-types';
import emptyJar from '../../images/empty-jar.png';
import './Jar.css';


export class Jar extends Component {

  wisdomCollection = () => ( 
    this.props.jar.map(wisdom => (
      <WisdomInJar 
        wisdom={wisdom} 
        key={wisdom.id} />
    ))
  )
 
  render() {
    return (
      <div className='wisdom-collection'>
        <img src={emptyJar}
          className='empty-jar' 
          alt="A jar of wisdom collection" />
        {this.wisdomCollection()}
      </div>
    );      
  }
}

export const mapStateToProps = (state) => {
  return { 
    jar: state.jar 
  };
};

export default connect(mapStateToProps)(Jar);

Jar.propTypes = {
  jar: PropTypes.array
};