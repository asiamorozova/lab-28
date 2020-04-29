import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../CharacterDetail/CharacterDetail.jsx';

const CharacterList = ({ characters }) => {
  const charactersListed = characters.map(character => (
    <li key ={ `${character.image} + ${ character.name}`}>
      <CharacterDetail {...character} />
    </li>
  ));

  return (
    <ul>
      {charactersListed}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, 
    categories: PropTypes.string.isRequired
  })).isRequired
  
};

export default CharacterList;


