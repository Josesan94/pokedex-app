import { Request, Response } from 'express';
import * as pokemonService from '../services/pokemon.services'


export const listPokemons = async (req: Request, res: Response) => {
    const { limit, offset }:any = req.query;
    try {
        const { results, total } = await pokemonService.fetchPokemons(limit, offset);
        const totalPages = Math.ceil(total / limit)
        res.json({ pokemons: results, total, totalPages, limit, offset });
    } catch (error:any) {
        console.error('Error on fetching Pokemons:', error);
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

export const getPokemonsByName = async (req: Request, res: Response) => {
    const { name } = req.params;
    try {
        const pokemons = await pokemonService.searchPokemonByName(name);
        res.json(pokemons);
    } catch (error:any) {
        res.status(404).send(error.message);
    }
};

export const getPokemonsByType = async (req:Request, res:Response) => {
    const {type} = req.params;
    try {
        const results = await pokemonService.searchPokemonByType(type);
        res.json(results)
    } catch(error:any) {
        res.status(500).send(error.message);
    }
}

// Modificar uno de los controladores existentes para aceptar ambos parámetros
export const getPokemons = async (req: Request, res: Response) => {
    const { name, type } = req.query;
    try {
        if (type) {
            const typeResults = await pokemonService.searchPokemonByType(type.toString());
            if (name) {
                const filteredResults = typeResults.filter((pokemon:any) => pokemon.name.includes(name));
                res.json(filteredResults);
                return;
            }
            res.json(typeResults);
            return;
        } else if (name) {
            const nameResults = await pokemonService.searchPokemonByName(name.toString());
            res.json(nameResults);
            return;
        }
        res.json([]);
    } catch (error:any) {
        console.error('Error fetching Pokemons:', error);
        res.status(500).send(error.message);
    }
};