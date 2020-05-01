import React from 'react';
import PropTypes from 'prop-types';
import IndividualDetail from '../IndividualDetail/IndividualDetail';

const CharacterList = ({ characters }) => {
  const charactersListed = characters.map(character => (
    <li key ={character._id}>
      <IndividualDetail {...character} />
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
    
    _id: PropTypes.string.isRequired
  })).isRequired
  
};

export default CharacterList;


