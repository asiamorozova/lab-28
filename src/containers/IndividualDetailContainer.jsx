import React, { useState, useEffect } from 'react';
import { fetchById, fetchCharacters } from '../../services/x-files';
import { useRouteMatch } from 'react-router-dom';
import CharacterDetail from '../components/App/CharacterDetail';

const CharacterDetailContainer = () => {
  const [character, setCharacter] = useState({});

  const match = useRouteMatch('/character/:id');

  useEffect(() => {
    fetchCharacters(match.params.id)
      .then(character => setCharacter(character));
  }, []);

  return (
    <>
      <CharacterDetail{ ...character} />
    </>
  );
};

export default CharacterDetailContainer;
