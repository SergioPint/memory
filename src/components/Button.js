import React from 'react';
import { StyledButton } from '../styles/Button.styled';

export const Button = ({ onClick, cta }) => {
  return <StyledButton onClick={onClick}>{cta}</StyledButton>;
};
