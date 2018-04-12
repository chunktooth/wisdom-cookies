import React, { Component } from 'react';
import { getQuotes } from '../../cleaners/getQuotes';
import wisdom from '../../images/wisdom-paper.jpg';
import leftCookie from '../../images/left-cookie.png';
import rightCookie from '../../images/right-cookie.png';
import { keepInJar } from '../../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Cookie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revealed: false,
      message: ''
    }
  }

  eatCookie = () => {
    this.setState({ revealed: !this.state.revealed })
    this.state.revealed === true ? this.hideWisdom() : this.showWisdom();
  }; 

  showWisdom = async () => {
    const wisdom = await getQuotes();
    this.setState({ message: wisdom.message });
  };

  hideWisdom = () => {
    this.setState({ message: ''});
  };

  putWisdomInJar = () => {
    this.props.keepInJar(this.state.message);
  }

  render() {
    return (
      <div className='cookie'>

      

        {
          this.state.revealed &&
          <div className='wisdom-wrapper'>
            <div className='message-wrapper'>
              <p className='message'>
                {this.state.message}
              </p>
            </div>
            <img src={wisdom}
              className='wisdom-paper'
              alt="Wisdom on a paper" />
          </div>  
        }      

      </div>
    );
  }
}
 
export const mapStateToProps = (state) => {
  return {
    jar: state.wisdom
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    keepInJar: (wisdom) => (dispatch(keepInJar(wisdom)))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cookie));

Cookie.propTypes = {
  keepInJar: PropTypes.func,
  wisdom: PropTypes.array
};