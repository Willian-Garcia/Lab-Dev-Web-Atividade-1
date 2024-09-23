import React from 'react';
import { StyledInput } from '../styles/InputStyles';
import { InputProps } from '../types';

const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
