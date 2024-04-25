import { Router } from 'express';
import * as pokemonController from '../controllers/pokemon.controller';

const router = Router();

router.get('/pokemons', pokemonController.listPokemons);
router.get('/pokemon/:pokemonId', pokemonController.getPokemonDetails);
router.get('/search_type/:name', pokemonController.getPokemonsByName);
router.get('/search_type/:type', pokemonController.getPokemonsByType);
// En tus rutas (routes.js o similar)
router.get('/search', pokemonController.getPokemons);



export default router;