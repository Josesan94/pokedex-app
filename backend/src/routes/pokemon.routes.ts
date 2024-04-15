import { Router } from 'express';
import * as pokemonController from '../controllers/pokemon.controller';

const router = Router();

router.get('/pokemons', pokemonController.listPokemons);

export default router;