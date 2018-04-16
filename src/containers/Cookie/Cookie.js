import React, { Component } from 'react';
import { connect } from 'react-redux';
import { keepInJar } from '../../actions';
import leftCookie from '../../images/left-cookie.png';
import rightCookie from '../../images/right-cookie.png';
import wisdom from '../../images/wisdom-paper.jpg';
import toJar from '../../images/put-inna-jar.png';
import eatCookie from '../../images/eat-cookie.png';
import wisdomJar from '../../images/wisdom-jar.png';
import PropTypes from 'prop-types';
import './Cookie.css';

export class Cookie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revealWisdom: false,
      brokenCookie: false, 
      wisdom: {},
      jar: []
    };
  }

  eatCookie = () => {
    const { wisdoms } = this.props;

    this.setState({ 
      revealWisdom: !this.state.revealWisdom,
      brokenCookie: !this.state.brokenCookie
    });
    this.state.revealWisdom === true ? 
      this.hideWisdom(wisdoms) : 
      this.showWisdom(wisdoms);
  }; 

  showWisdom = async (wisdoms) => {
    const randomKey = Math.floor(Math.random() * wisdoms.length);
    const wisdom = wisdoms[randomKey];
    this.setState({ wisdom });
  };

  hideWisdom = () => {
    this.setState({ 
      wisdom: {},
      brokenCookie: false,
      revealWisdom: false });
  };

  putWisdomInJar = () => {
    let { jar } = this.props;
    let { wisdom } = this.state;

    if (!jar.find(wisdomInJar => wisdomInJar.id === 
      wisdom.id)) {
      this.props.keepInJar(wisdom);
    }
    this.setState({ 
      revealWisdom: false,
      brokenCookie: false 
    });
  }

  render() {
    let leftCookieState = this.state.brokenCookie ===
      true ? 'left-cookie-broken' : '';
    let rightCookieState = this.state.brokenCookie ===
      true ? 'right-cookie-broken' : '';

    return (
      <div className='Cookie'>      
        { !this.state.broken && 
          <div className='cookie-container'>
            <img src={leftCookie}
              className={`left-cookie ${leftCookieState}`}
              alt="left piece of cookie"
              onClick={this.eatCookie} />  
            <img src={rightCookie}
              className={`right-cookie ${rightCookieState}`}
              alt="right piece of cookie"
              onClick={this.eatCookie} /> 
          </div>
        }

          <div className='jar-o-wisdom'>
            <img src={wisdomJar}
              className='wisdom-jar' 
              alt="Revisit a jar of wisdoms" />
            <p className='btn-txt'>
              {`(${this.props.jar.length})
              Wisdom in Jar`}
            </p>
          </div>

        { this.state.revealWisdom &&
          <div className='Wisdom'>
            <div className='wisdom-wrapper'>
              <p className='message'>
                  {this.state.wisdom.message}
              </p>
              <img src={wisdom}
                className='wisdom-paper'
                alt="Wisdom on a paper"
                onClick={this.eatCookie} />
            </div> 
          
          <div className='btn-flex'>
            <div className='put-inna-jar'>
              <img src={toJar}
                className='to-jar'
                alt="A jar to throw in wisdoms"
                onClick={this.putWisdomInJar} />
              <p className='btn-txt'>Keep Wisdom</p>
            </div>

            <div className='eat-another-cookie'>
              <img src={eatCookie}
                className='eat-cookie'
                alt="Eat another cookie"
                onClick={this.eatCookie} />
              <p className='btn-txt'>Eat Another!</p>
            </div>
          </div>
          </div>      
        }
      </div> 
    );
  }
}
 
export const mapStateToProps = (state) => {
  return {
    wisdoms: state.wisdoms,
    jar: state.jar
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    keepInJar: (wisdom) => (dispatch(keepInJar(wisdom)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cookie);

Cookie.propTypes = {
  keepInJar: PropTypes.func,
  wisdoms: PropTypes.array,
  jar: PropTypes.array
  // wisdoms: PropTypes.oneOfType([
  //   PropTypes.object,
  //   PropTypes.array
  // ])
};