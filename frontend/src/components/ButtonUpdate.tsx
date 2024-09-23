import React from 'react';
import { StyledButton } from '../styles/ButtonStyles';
import { ButtonProps } from '../types';

const ButtonUpdate: React.FC<ButtonProps> = ({ type, onClick, disabled, children }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default ButtonUpdate;
