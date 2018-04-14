import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Cookie } from '../Cookie/Cookie';
import { Jar } from '../Jar/Jar';
import { getWisdoms } from '../../cleaners/getWisdoms';
import { loadWisdoms, keepWisdom } from '../../actions';
import dragon from '../../images/dragon.png';
import wisdom from '../../images/wisdom-paper.jpg';
import wisdomJar from '../../images/wisdom-jar.png';
import toJar from '../../images/put-inna-jar.png';
import eatCookie from '../../images/eat-cookie.png';
import leftCookie from '../../images/left-cookie.png';
import rightCookie from '../../images/right-cookie.png';
import PropTypes from 'prop-types';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revealWisdom: false,
      brokenCookie: false, 
      wisdom: {},
      jar: []
    }
  }

  async componentDidMount() {
    const wisdoms = await getWisdoms();
    this.props.loadWisdoms(wisdoms)
  }

  eatCookie = () => {
    const { wisdoms } = this.props;
    this.setState({ 
      revealWisdom: !this.state.revealWisdom,
      brokenCookie: !this.state.brokenCookie
     })
    this.state.revealWisdom === true ? this.hideWisdom(wisdoms) : this.showWisdom(wisdoms);
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
    
    if (!jar.find(wisdomInJar => wisdomInJar.id === wisdom.id)) {
      this.props.keepWisdom(wisdom);
    }
    this.setState({ 
      revealWisdom: false,
      brokenCookie: false 
    });
  }

  render() {
    let leftCookieState = this.state.brokenCookie === true ? 'left-cookie-broken' : '';
    let rightCookieState = this.state.brokenCookie === true ? 'right-cookie-broken' : '';

    return (
      <div className='App'>

        <div className='left-column'>
          <img src={dragon}
            className='dragon'
            alt='An silhouette of Chinese dragon' />
        </div>

        <div className='main'>
          <header className='App-header'>
            <h1 className="title">Wisdom Co0kies</h1>
            <h4 className="under-title">Choose wisdom to guide your fortune</h4>
          </header>  

          { !this.state.broken && 
             <div className='cookie'>
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

          {
            this.state.revealWisdom &&
            <div className='wisdom-wrapper'>
              <p className='message'>
                {this.state.wisdom.message}
              </p>
              <img src={wisdom}
                className='wisdom-paper'
                alt="Wisdom on a paper"
                onClick={this.eatCookie} />
            </div>         
          } 

        </div>     

        <div className='right-column'>
          <div className='keepjar-btn'>
            <NavLink
              to='/jar'
              id='jar'
              className='nav'>
              <img src={wisdomJar}
                className='wisdom-jar' 
                alt="Revisit a jar of wisdoms" />
              <p className='under-button'>{`(${this.props.jar.length}) Wisdom in Jar`}</p>
            </NavLink>  
          </div>

          <div className='cookie-btn'>
            <img src={eatCookie}
              className='eat-cookie'
              alt="More wisdom to be had"
              onClick={this.eatCookie} />
            <p className='btn-txt'>Eat another cookie</p>
          </div>

          <div className='putjar-btn'>
            <img
              src={toJar}
              className='to-jar'
              alt="A jar to throw in wisdoms"
              onClick={this.putWisdomInJar} />
            <p className='btn-txt'>Keep wisdom in a jar</p>
          </div>
        </div>
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
    loadWisdoms: (wisdoms) => (dispatch(loadWisdoms(wisdoms))),
    keepWisdom: (wisdom) => (dispatch(keepWisdom(wisdom)))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  loadWisdoms: PropTypes.func,
  keepWisdom: PropTypes.func,
  wisdoms: PropTypes.array
};