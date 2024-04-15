import { Request, Response } from 'express';
import * as pokemonService from '../services/pokemon.services'

export const listPokemons = async (req: Request, res: Response) => {
    try {
        const pokemons = await pokemonService.fetchPokemons();
        res.json(pokemons);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
};