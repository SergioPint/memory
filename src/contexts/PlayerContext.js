import React, { useContext, useState } from 'react';

const PlayerContext = React.createContext();

export function usePlayer() {
  return useContext(PlayerContext);
}

export const PlayerProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [gameStatus, setGameStatus] = useState('start');

  const addScore = () => {
    setScore(score + 1);
  };

  const addBest = () => {
    if (best === score && best < 11) {
      setBest(best + 1);
    } else if (best === 11) {
      setBest(best + 1);
      setGameStatus('end');
    }
  };

  const gameOver = () => {
    setScore(0);
  };

  const startNewGame = () => {
    setScore(0);
    setBest(0);
    setGameStatus('ongoing');
  };

  const startGame = () => {
    setGameStatus('ongoing');
  };

  return (
    <PlayerContext.Provider
      value={{
        score,
        gameOver,
        addScore,
        best,
        addBest,
        gameStatus,
        startNewGame,
        startGame,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
