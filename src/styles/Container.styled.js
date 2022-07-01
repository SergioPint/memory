import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;

  @media all and (max-width: 760px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;
