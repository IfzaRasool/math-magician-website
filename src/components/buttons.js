/* eslint-disable no-nested-ternary */
import React from 'react';
import { PropTypes } from 'prop-types';

const CreateButton = (props) => {
  const { value, handleClick } = props;
  return (
    <button type="button" className={value === '+' || value === '=' || value === 'x' || value === '÷' || value === '-' ? 'btn primary' : value === '0' ? 'btn zero' : 'btn'} value="AC" onClick={() => handleClick(value)}>
      {value}
    </button>
  );
};

CreateButton.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

CreateButton.defaultProps = {
  handleClick: () => null,
};
export default CreateButton;
