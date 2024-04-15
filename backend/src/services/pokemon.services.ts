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

