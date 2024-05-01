import { Card, CardContent, Typography, CardMedia, Chip, LinearProgress, Box } from '@mui/material';
import { usePokemonDetails } from '../hooks/usePokemonDetails'; // Asegúrate de ajustar la ruta de importación según tu estructura de directorios
import { useState } from 'react';
import PokemonDetailsModal from './PokemonDetails';
import Image from 'next/image';
import { getTypeColorClass } from '@/utils/getTypeColors';

interface PokemonCardInterface {
    pokemonUrl: string;
}

const PokemonCard = ({ pokemonUrl }:PokemonCardInterface) => {
  const { pokemon: details, isLoading, isError } = usePokemonDetails(pokemonUrl);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  if (isError) return <div>Error loading details.</div>;
  if (isLoading || !details) return <div>Loading details...</div>;


  const imageUrl = details.sprites?.other?.dream_world?.front_default ? 
                    details.sprites?.other?.dream_world?.front_default : 
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`

  return (
    <>
    <div className='mt-5 mb-2'>
			<div onClick={handleClickOpen} className='cursor-pointer hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300 bg-gray-200 flex items-center justify-center rounded-xl h-[250px]'>
				<Image
					src={imageUrl}
					alt={`Pokemon ${details.name}`}
          width={200}
          height={200}
				/>
			</div>
			<div className='pt-2'>
				<Typography variant="h4"><strong>{details.name}</strong></Typography>
				<div className='flex gap-2 border-r-3 text-black'>
					{details.types.map((type:any) => (
						<Typography variant='h6'  key={type.type.name} className={`${getTypeColorClass(type.type.name)} mt-2 px-4 py-1 rounded-xl   `}>
							{type.type.name}
						</Typography>
					))}
				</div>
			</div>
		</div>
    <PokemonDetailsModal open={open} handleClose={handleClose} details={details} />
    </>
  );
};

export default PokemonCard;