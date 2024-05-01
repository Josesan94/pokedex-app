import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Chip, Grid, Card, CardMedia, Box, LinearProgress } from '@mui/material';

const PokemonDetailsModal = (props:any) => {
    const {open, handleClose, details} = props;

    const normalize = (value:any) => value * 100 / 255; // Normalizo los valores para la barra de progreso.
    return (
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <Box className="flex flex-col items-center ">
        <DialogTitle><Typography variant='h4'>{(details.name).toUpperCase()}</Typography></DialogTitle>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`}
                alt={details.name}
                style={{ width: '100%', height: 'auto', maxHeight: 300 }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Box className="flex flex-col justify-start items-start gap-3">
            <div className="space-y-2">
            <Typography variant="body1"><strong>Stats:</strong></Typography>
            {details.stats.map((stat:any, index:any) => (
              <Box key={index}>
                  <Typography variant="body1" color="text.secondary" className="font-medium">
                    {stat.stat.name.replace('-', ' ')}: {stat.base_stat}
                  </Typography>
                  <LinearProgress variant="determinate" value={normalize(stat.base_stat)} />
              </Box>
            ))}
          </div>
            <Typography variant="body1"><strong>Abilities:</strong>
              {details.abilities.map((ability:any, index:any) => (
                  <Chip key={index} label={ability.ability.name} style={{ margin: 2 }} />
                ))}
            </Typography>
                </Box>
          </Grid>
        </Grid>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
        </Box>
      </Dialog>
    );
  };
  
  export default PokemonDetailsModal;
