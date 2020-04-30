import React, { useState, useEffect } from 'react';
import CharacterList from '../components/App/CharacterList/CharacterList';
import { fetchCharacters } from '../../services/x-files';

const xFilesCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(characters => setCharacters(characters));
  });

  return (
    <>
      <CharacterList characters={characters} />
    </>
  );
};

export default xFilesCharacters;


