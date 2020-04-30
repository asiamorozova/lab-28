export const fetchCharacters = () => {
  return fetch('https://dragon-age-api.herokuapp.com/api/v1/characters')
    .then(res => res.json());
};

export const fetchById = () => {
  return fetch(`https://dragon-age-api.herokuapp.com/api/v1/characters/${_id}`)
    .then(res => res.json());
};
