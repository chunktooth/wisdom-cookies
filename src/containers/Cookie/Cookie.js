import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Cookie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revealed: false
    }
  }

  eatCookie = () => {
    const randomKey = Math.floor(Math.random() * this.props.quotes.length);
    let wisdom = this.props.quotes[randomKey].message;

    this.setState({ revealed: !this.state.revealed })
    this.state.revealed === true ? this.hideWisdom() : this.showWisdom(wisdom);
  }; 

  showWisdom = (wisdom) => {
    console.log(wisdom)
  };

  hideWisdom = () => {
    console.log('hide');
  };


  render() {
    return (
      <div>
        <button 
          onClick={this.eatCookie}>
          Eat another cookie 
        </button>
      </div>
    );
  }
}
 

Cookie.propTypes = {
  quotes: PropTypes.array
};