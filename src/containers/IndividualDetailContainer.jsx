import React, { useState, useEffect } from 'react';
import { fetchById } from '../../services/x-files';
import { useRouteMatch } from 'react-router-dom';
import CharacterDetail from '../components/App/CharacterDetail/CharacterDetail';

const IndividualDetailContainer = () => {
  const [character, setCharacter] = useState({});

  const match = useRouteMatch('/character/:id');

  useEffect(() => {
    fetchById(match.params.id)
      .then(character => setCharacter(character));
  }, []);

  return (
    <>
      <CharacterDetail{ ...character} />
    </>
  );
};

export default IndividualDetailContainer;
