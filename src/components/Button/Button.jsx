import React from 'react';
import PropTypes from 'prop-types';
import { CommonBtn } from './Button.styled';

function Button({ label, onClick = () => null, type = 'button' }) {
  return (
    <CommonBtn type={type} onClick={onClick}>
      {label}
    </CommonBtn>
  );
}
Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
