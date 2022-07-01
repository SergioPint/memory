import React, { useContext, useState, useEffect } from 'react';
import { usePlayer } from './PlayerContext';

const CatContext = React.createContext();

export function useCat() {
  return useContext(CatContext);
}

export const CatProvider = ({ children }) => {
  const [cats, setCats] = useState([
    { catId: '01', choosen: false },
    { catId: '02', choosen: false },
    { catId: '03', choosen: false },
    { catId: '04', choosen: false },
    { catId: '05', choosen: false },
    { catId: '06', choosen: false },
    { catId: '07', choosen: false },
    { catId: '08', choosen: false },
    { catId: '09', choosen: false },
    { catId: '10', choosen: false },
    { catId: '11', choosen: false },
    { catId: '12', choosen: false },
  ]);

  const { gameOver, score, addBest } = usePlayer();

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const shuffleCats = () => {
    const changes = shuffleArray([...cats]);
    return setCats(changes);
  };

  const reset = () => {
    const changes = cats.map((cat) => {
      return { ...cat, choosen: false };
    });
    setCats(changes);
    console.log('reset', changes);
  };

  useEffect(() => {
    shuffleCats();
  }, [score]);

  const chooseCat = (id) => {
    let newRound = false;
    console.log(cats);
    const changes = cats.map((cat) => {
      if (cat.catId === id && !cat.choosen) {
        return { ...cat, choosen: true };
      }
      if (cat.catId === id && cat.choosen) {
        console.log('game over');
        gameOver();
        reset();
        newRound = true;
      }
      return cat;
    });
    console.log(changes);
    if (!newRound) {
      addBest();
      setCats(changes);
    }
    console.log(cats);
  };

  return (
    <CatContext.Provider value={{ cats, shuffleCats, chooseCat, reset }}>
      {children}
    </CatContext.Provider>
  );
};
