import axios from 'axios';
const url = 'https://pokeapi.co/api/v2/pokemon';

const getPokemons = () => {
  return axios.get(url).then((res) => res.data.results);
};

export { getPokemons };
