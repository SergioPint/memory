import React from 'react';
import { usePlayer } from '../contexts/PlayerContext';
import { StyledGameStart } from '../styles/GameStart.styled';
import { Button } from './Button';

export const GameStart = () => {
  const { startGame } = usePlayer();

  return (
    <StyledGameStart>
      <h2>Welcome to Alizée Memory!</h2>
      <p>
        Remember exactly which picture you have already clicked on. A picture
        may only be selected once, otherwise the round is lost. A maximum of 12
        points can be achieved.
      </p>
      <Button onClick={startGame} cta="Start Game" />
    </StyledGameStart>
  );
};
