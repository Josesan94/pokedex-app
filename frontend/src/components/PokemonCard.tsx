import { Card, CardContent, Typography, CardMedia, Chip, LinearProgress, Box } from '@mui/material';
import { usePokemonDetails } from '../hooks/usePokemonDetails'; // Asegúrate de ajustar la ruta de importación según tu estructura de directorios
import { useState } from 'react';
import PokemonDetailsModal from './PokemonDetails';

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

  const normalize = (value:any) => value * 100 / 255; // Normalizo los valores para la barra de progreso.


  return (
    <>
      <Card onClick={handleClickOpen} className=" max-h-[100%] cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-90 bg-white shadow-lg rounded-lg overflow-hidden">
        <CardMedia
          component="img"
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`}
          alt={details.name}
          className="w-full h-50 object-fit"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" className="text-center capitalize">
            {details.name}
          </Typography>
          <div className="flex justify-center flex-wrap gap-2 mb-4">
            {details.types.map((type:any, index:any) => (
              <Chip key={index} label={type.type.name} className="capitalize" color="primary" />
            ))}
          </div>
          <div className="space-y-2">
            {details.stats.map((stat:any, index:any) => (
              <Box key={index}>
                  <Typography variant="body1" color="text.secondary" className="font-medium">
                    {stat.stat.name.replace('-', ' ')}: {stat.base_stat}
                  </Typography>
                  <LinearProgress variant="determinate" value={normalize(stat.base_stat)} />
              </Box>
            ))}
          </div>
        </CardContent>
      </Card>
      <PokemonDetailsModal open={open} handleClose={handleClose} details={details} />
    </>
  );
};

export default PokemonCard;