import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url: string)  => {
    const response = await axios.get(url)
    const data = response.data
    return data;
}


const PokemonDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const { data, error } = useSWR(id ? `http://localhost:3001/api/pokemon/${id}` : null, fetcher);

  if (error) return <div>Error loading Pokémon details.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name} Details</h1>
      <p><strong>Height:</strong> {data.height}</p>
      <p><strong>Weight:</strong> {data.weight}</p>
      <p><strong>Types:</strong> {data.types.map((type: any) => type.type.name).join(', ')}</p>
      <p><strong>Abilities:</strong> {data.abilities.map((ability: any) => ability.ability.name).join(', ')}</p>
    </div>
  );
};

export default PokemonDetails;