import type { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';
import axios from 'axios';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import PokemonCard from '@/components/PokemonCard';

const fetcher = async (url: string)  => {
    const response = await axios.get(url)
    const data = response.data
    return data;
}

const Homepage: NextPage = () => {
    const { data, error } = useSWR('http://localhost:3001/api/pokemons?limit=20&offset=0', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
  
    return (
      <div className="p-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4 bg-gray-900 min-h-screen">
        <h1 className="col-span-full text-white text-3xl text-center mb-5">Pokédex</h1>
        {data.map((pokemon:any) => (
        <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
      ))}
      </div>
    );
  };
  
  export default Homepage;