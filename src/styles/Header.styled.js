import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 10px;
  width: 100%;
  height: 50px;
  background-color: #9b89b3;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  a,
  a:visited {
    text-decoration: none;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 0.7rem;
  font-weight: lighter;
  color: #312b39;
  text-transform: uppercase;

  h1 {
    display: flex;
    flex-direction: column;
  }

  span {
    font-weight: 200;
    font-size: 0.8rem;
    letter-spacing: 0.25rem;
  }

  svg {
    height: 40px;
    fill: #312b39;
  }
`;
