import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Cookie } from '../Cookie/Cookie';
import { Jar } from '../Jar/Jar';
import { getWisdoms } from '../../cleaners/getWisdoms';
import { loadWisdoms, keepWisdom } from '../../actions';
import dragon from '../../images/dragon.png';
import wisdom from '../../images/wisdom-paper.jpg';
import wisdomJar from '../../images/wisdom-jar.png';
import toJar from '../../images/put-inna-jar.png';
import eatCookie from '../../images/eat-cookie.png';
import PropTypes from 'prop-types';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revealed: false,
      message: ''
    }
  }

  async componentDidMount() {
    const wisdoms = await getWisdoms();
    console.log(wisdoms);
    this.props.loadWisdoms(wisdoms)
  }

  eatCookie = () => {
    const { wisdoms } = this.props;
    this.setState({ revealed: !this.state.revealed })
    this.state.revealed === true ? this.hideWisdom(wisdoms) : this.showWisdom(wisdoms);
  }; 

  showWisdom = async (wisdoms) => {
    const randomKey = Math.floor(Math.random() * wisdoms.length);
    const wisdom = wisdoms[randomKey].message;
    console.log(wisdom);
    this.setState({ message: wisdom });
  };

  hideWisdom = () => {
    // this.setState({ message: '' });
  };

  putWisdomInJar = () => {
    // this.props.keepWisdom(this.props.wisdom);
  }

  render() {
    return (
      <div className='App'>

        <div className='left-column'>
          <img src={dragon}
            className='dragon'
            alt='An sillhouete of Chinese dragon' />
        </div>

        <div className='main'>
          <header className='App-header'>
            <h1 className="title">Wisdom Co0kies</h1>
            <h4 className="under-title">Choose wisdom to guide your fortune</h4>
          </header>   

          <div className='cookie'>   
          {
            this.state.revealed &&
            <div className='wisdom-wrapper'>
              <p className='message'>
                {this.state.message}
              </p>
              <img src={wisdom}
                className='wisdom-paper'
                alt="Wisdom on a paper" />
            </div>  
          }      
          </div>
         </div>

        <div className='right-column'>
          <div className='keepjar-btn'>
            <NavLink
              to='/jar'
              id='jar'
              className='nav'>
              <img src={wisdomJar}
                className='wisdom-jar' 
                alt="Revisit a jar of wisdom" />
              <p className='under-button'>0 Wisdom in Jar</p>
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
              alt="A jar for many wisdoms"
              onClick={this.putWisdomInJar} />
            <p className='btn-txt'>Keep wisdom in a jar</p>
          </div>
        </div>

        <Route exact path='/jar'
          component={Jar} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    wisdoms: state.wisdoms
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