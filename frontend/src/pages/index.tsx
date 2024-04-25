import { useState } from 'react';
import type { NextPage } from 'next';
import useSWR from 'swr';
import axios from 'axios';
import PokemonCard from '@/components/PokemonCard';
import SearchBar from '@/components/SearchBar';
import { Typography, Box, CircularProgress, Grid, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const fetcher = async (url: string)  => {
    const response = await axios.get(url)
    const data = response.data
    return data;
}

const Homepage: NextPage = () => {
    const [nameQuery, setNameQuery] = useState('');
    const [typeQuery, setTypeQuery] = useState('');
    const [triggerSearch, setTriggerSearch] = useState(false);


  // Construir la URL basada en los estados de búsqueda
    const url = triggerSearch
      ? `http://localhost:3001/api/search?name=${nameQuery}&type=${typeQuery}`
      : `http://localhost:3001/api/pokemons?limit=20&offset=0`;

      const { data, error, isValidating } = useSWR(url, fetcher);
  

      const handleSearch = () => {
        setTriggerSearch(true); // Re-activa la búsqueda cuando se hace clic en cualquier botón de búsqueda
    };

      const handleClear = () => {
        setNameQuery('');
        setTypeQuery('');
        setTriggerSearch(false);
      };

    return (
      <div className='bg-sky-500/50 w-[100%] flex flex-col items-center'>
        <h1 className="col-span-full text-white text-3xl text-center mb-5">Pokédex</h1>
        <div className='flex flex-row gap-3'>
          <SearchBar value={nameQuery} placeholder="Search by Name" onChange={setNameQuery} onSearch={handleSearch} onClear={handleClear} />
          <SearchBar value={typeQuery} placeholder="Search by Type" onChange={setTypeQuery} onSearch={handleSearch} onClear={handleClear} />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            <SearchIcon />
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClear}>
            <ClearIcon />
          </Button>
        </div>
        {!data && !isValidating && <div className=' m-5 flex items-center justify-center'>Sorry! No pokemon has been found. Try another one</div>}
        {isValidating && (
          <div className=' m-5 flex items-center justify-center'>
            <CircularProgress color="secondary" />
          </div>
        )}
      <Grid className="w-[80%] p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4  min-h-screen">
        {data && data.map((pokemon: any) => (
          <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
        ))}
      </Grid>
        </div>
    );
  };
  
  export default Homepage;