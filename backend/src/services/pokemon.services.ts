import axios from 'axios';


export const fetchPokemons = async (limit: number = 5, offset: number = 0) => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      return data.results;
    } catch(error) {
      console.error('Error fetching Pokemons:', error);
      throw new Error('Failed to fetch Pokemons');
    }
};

export const fetchPokemonDetails = async (pokemonId: string) => {
  try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      return data;
  } catch (error) {
      console.error('Error fetching Pokemon details:', error);
      throw new Error('Failed to fetch Pokemon details');
  }
};

export const searchPokemonByName = async (name:string) => {
  try {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return [{
      name: data.name,
      url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`
    }
    ]
  } catch (error) {
    console.error('Error searching Pokemons:', error);
    throw new Error('Failed to search Pokemons');
  }
};

export const searchPokemonByType = async (type:string) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${type.toLowerCase()}`);
    // Esto devuelve una lista de Pokémon que pertenecen a ese tipo
    const pokemons = data.pokemon.map((p:any) => ({
      name: p.pokemon.name,
      url: p.pokemon.url
  }));
  return pokemons;
  }  catch(e) {

  }
}

