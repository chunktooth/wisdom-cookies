import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getQuotes } from '../../cleaners/getQuotes';
import { keepWisdom } from '../../actions';
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
    this.setState({ message: wisdom.message })
  };

  hideWisdom = () => {
    this.setState({ message: '' });
  };

  putWisdomInJar = (wisdom) => {
    this.props.keepWisdom(wisdom);
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button 
          onClick={this.eatCookie}>
          Eat another cookie 
        </button>
        <button
          onClick={this.putWisdomInJar}>
          Put wisdom in a jar
        </button>
      </div>
    );
  }
}
 
export const mapStateToProps = (state) => {
  return {
    message: state.message,
    id: state.id
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    keepWisdom: (wisdom) => (dispatch(keepWisdom(wisdom)))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cookie));

Cookie.propTypes = {
  keepWisdom: PropTypes.func,
  wisdom: PropTypes.array
};