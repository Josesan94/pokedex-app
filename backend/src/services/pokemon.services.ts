import axios from 'axios';


export const fetchPokemons = async (limit: number, offset: number = 0) => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      console.log(data.count)
      return {
        results: data.results,  // La lista de pokemons
        total: data.count,      // Total de pokemons disponibles
        limit,                  // Limite de pokemons por página
        offset                  // Offset actual
    };
    } catch(error) {
      console.error('Error fetching Pokemons:', error);
      throw new Error('Failed to fetch Pokemons');
    }
};

export const fetchPokemonDetails = async (pokemonId: string) => {
  try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      // Extraemos solo la información que necesitamos para el frontend
      const details = {
        name: data.name,
        id: data.id,
        sprites: {
            front_default: data.sprites.front_default,
            other: {
                official_artwork: data.sprites.other['official-artwork'].front_default,
                dream_world: data.sprites.other.dream_world.front_default
            }
        },
        types: data.types.map((type: any) => ({
            slot: type.slot,
            type: type.type.name
        })),
        stats: data.stats.map((stat: any) => ({
            stat: {
                name: stat.stat.name,
                base_stat: stat.base_stat
            }
        })),
        abilities: data.abilities.map((ability: any) => ({
            ability: ability.ability.name
        }))
    };

    return details;
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

