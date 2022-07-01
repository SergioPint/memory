import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from '../styles/Card.styled';
import { useCat } from '../contexts/CatContext';
import { usePlayer } from '../contexts/PlayerContext';

export const Card = ({ catId }) => {
  const { shuffleCats, chooseCat } = useCat();
  const { addScore } = usePlayer();

  const handleClick = (e) => {
    const dataID = e.target.getAttribute('data-cat-id');
    addScore();
    shuffleCats();
    chooseCat(dataID);
  };

  return (
    <StyledCard onClick={handleClick}>
      <img
        src={`./images/${catId}.jpg`}
        alt="sweet alizee"
        data-cat-id={catId}
      />
    </StyledCard>
  );
};

Card.propTypes = {
  catId: PropTypes.string,
};
