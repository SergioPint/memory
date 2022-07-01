import React from 'react';
import { usePlayer } from '../contexts/PlayerContext';
import { StyledScore } from '../styles/Score.styled';

const Score = () => {
  const { score, best } = usePlayer();

  return (
    <StyledScore>
      <div>Score: {score}</div>
      <div>Best: {best}</div>
    </StyledScore>
  );
};

export default Score;
