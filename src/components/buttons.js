/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class CreateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, handleClick } = this.props;
    return (

      <button type="button" className={value === '+' || value === '=' || value === 'x' || value === '÷' || value === '-' ? 'btn primary' : value === '0' ? 'btn zero' : 'btn'} value="AC" onClick={() => handleClick(value)}>
        {value}
      </button>
    );
  }
}

CreateButton.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

CreateButton.defaultProps = {
  handleClick: () => null,
};
