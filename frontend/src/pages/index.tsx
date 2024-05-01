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
    const [page, setPage] = useState<number>(1)
    const [nameQuery, setNameQuery] = useState<string>('');
    const [typeQuery, setTypeQuery] = useState<string>('');
    const [triggerSearch, setTriggerSearch] = useState<boolean>(false);
    const limit:number = 5;
    const offset =(page -1) * limit


  // Construir la URL basada en los estados de búsqueda
    const url = triggerSearch
      ? `http://localhost:3001/api/search?name=${nameQuery}&type=${typeQuery}`
      : `http://localhost:3001/api/pokemons?limit=${limit}&offset=${offset}`;

      const { data, error, isValidating } = useSWR(url, fetcher, { revalidateOnFocus: false });
  

      const handleSearch = () => {
        setTriggerSearch(true); // Re-activa la búsqueda cuando se hace clic en cualquier botón de búsqueda
    };

      const handleClear = () => {
        setNameQuery('');
        setTypeQuery('');
        setTriggerSearch(false);
      };

      const handleNextPage  = () => {
        if(page < data.totalPages) {
          setPage(page + 1)
        }
      }

      const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };



    return (
      <div className='bg-white w-[100%] flex flex-col items-center pb-10'>
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
          {data && data?.pokemons?.map((pokemon: any) => (
            <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
          ))}
        </Grid>
        <div className="w-[50%] flex flex-row gap-2 justify-between pt-5">
        <Button className="font-bold text-xl" onClick={handlePreviousPage} disabled={page === 1}>{"<<<"}</Button>
        <Typography  variant="body1" color="text.secondary" className="font-medium">Page {page} of {data?.totalPages}</Typography>
        <Button onClick={handleNextPage} className="font-bold text-xl" disabled={page === data?.totalPages}>{">>>"}</Button>

        </div>
      </div>
    );
  };
  
  export default Homepage;