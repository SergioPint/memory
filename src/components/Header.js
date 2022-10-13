import React from 'react';
import SvgCat from '../assets/SvgCat';
import { StyledHeader, StyledLogo } from '../styles/Header.styled';
import Score from './Score';

export const Header = () => {
  return (
    <StyledHeader>
      <a href="./">
        <StyledLogo>
          <SvgCat />
          <h1>
            Cat<span>Memory</span>
          </h1>
        </StyledLogo>
      </a>
      <Score />
    </StyledHeader>
  );
};
