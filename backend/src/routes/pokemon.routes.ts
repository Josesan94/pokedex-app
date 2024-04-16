import { Router } from 'express';
import * as pokemonController from '../controllers/pokemon.controller';

const router = Router();

router.get('/pokemons', pokemonController.listPokemons);
router.get('/pokemon/:pokemonId', pokemonController.getPokemonDetails);
router.get('/search', pokemonController.searchPokemons);


export default router;