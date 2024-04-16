import type { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url: string)  => {
    const response = await axios.get(url)
    const data = response.data
    return data;
}

const Homepage: NextPage = () => {
    const { data, error } = useSWR('http://localhost:3001/api/pokemons?limit=20&offset=0', fetcher);
    console.log(data)


    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
  
    return (
      <div>
        <h1>Pokédex</h1>
        <ul>
        {data?.map((pokemon: any) => (
          <li key={pokemon.name}>
            <Link href={`/pokemon/${pokemon.name}`}>
              <span>{pokemon.name}</span>
            </Link>
          </li>
        ))}
        </ul>
      </div>
    );
  };
  
  export default Homepage;