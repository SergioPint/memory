import React, { useEffect } from 'react';
import { useCat } from '../contexts/CatContext';
import { usePlayer } from '../contexts/PlayerContext';
import { StyledGameEnd } from '../styles/GameEndStyled';
import { Button } from './Button';

export const GameEnd = () => {
  const { startNewGame } = usePlayer();
  const { reset } = useCat();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    startNewGame();
    reset();
  };

  return (
    <StyledGameEnd>
      <h2>Congratulations!</h2>
      <p>You have reached all 12 points!</p>
      <Button onClick={handleClick} cta="neues Spiel starten" />
    </StyledGameEnd>
  );
};
