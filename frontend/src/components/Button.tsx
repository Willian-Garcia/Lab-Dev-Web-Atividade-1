import React from 'react';
import { StyledButton } from '../styles/ButtonStyles';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
