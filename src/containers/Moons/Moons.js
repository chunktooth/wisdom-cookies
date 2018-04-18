import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadMoons } from '../../actions';
import { Mooncake } from '../../components/Mooncake/Mooncake';
import wisdomJar from '../../images/wisdom-jar.png';
import PropTypes from 'prop-types';
import './Moons.css';

export class Moons extends Component {

  moonPhases = () => (
    this.props.moonphases.map((phase, index) => (
      <Mooncake phase={phase} key={index} />
    ))
  )

  render() {
    return (
      <div className="Moons">
        <p className='overhead'>
          &quot;Which moon pie will be in the sky...?&quot;
        </p>

        <div className="show-moons">
          {this.moonPhases()}
        </div>
        <NavLink to='/jar' id='jar'>
          <div className='jar-o-wisdoms'>
            <img src={wisdomJar}
              className='wisdom-jar' 
              alt="Revisit a jar of wisdoms" />
            <p className='btn-txt'>
              Back to Jar  
            </p>
          </div>
        </NavLink>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    moonphases: state.moonphases
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    loadMoons: (moonphases) => (dispatch(loadMoons(moonphases)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Moons);

Moons.propTypes = {
  moonphases: PropTypes.array,
  loadMoons: PropTypes.func
};