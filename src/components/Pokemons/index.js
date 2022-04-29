import React, { useState } from 'react';
import { getPokemons } from '../../services/pokemon-services';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState(null);

  const obtenerPokemons = async () => {
    const auxPokemons = await getPokemons();
    setPokemons(auxPokemons);
  };

  return (
    <div>
      <button onClick={obtenerPokemons}>Lista de pokemones</button>
      {pokemons &&
        pokemons.map((pokemon) => <div key={pokemon.name}>{pokemon.name}</div>)}
    </div>
  );
};

export default Pokemons;
