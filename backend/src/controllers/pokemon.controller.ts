import { Request, Response } from 'express';
import * as pokemonService from '../services/pokemon.services'

type dto = {
    limit:number;
    offset:number
}

export const listPokemons = async (req: Request, res: Response) => {
    const { limit, offset }:any = req.query;
    try {
        const pokemons = await pokemonService.fetchPokemons(limit, offset);
        res.json(pokemons);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
};

export const getPokemonDetails = async (req: Request, res: Response) => {
    const {pokemonId} = req.params;

    try {
        const pokemonDetails = await pokemonService.fetchPokemonDetails(pokemonId);
        res.json(pokemonDetails);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
}

export const searchPokemons = async (req: Request, res: Response) => {
    const { query } = req.query;
    try {
        const pokemons = await pokemonService.searchPokemons(query as string);
        res.json(pokemons);
    } catch (error:any) {
        res.status(404).send(error.message);
    }
};