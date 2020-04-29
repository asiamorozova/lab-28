export const fetchgithub = (username) => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
    .then(res => res.json());
};
