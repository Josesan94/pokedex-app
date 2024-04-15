import axios from 'axios';


export const fetchPokemons = async () => {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
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

