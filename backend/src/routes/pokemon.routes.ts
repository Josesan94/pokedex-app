import { Router } from 'express';
import * as pokemonController from '../controllers/pokemon.controller';
import authenticateToken from '../middlewares/auth.middleware';
import * as tokenController from '../controllers/generateToken.controller';

const router = Router();

/**
 * @openapi
 * /pokemons:
 *   get:
 *     summary: Retorna una lista de Pokémons.
 *     description: Obtiene una lista paginada de Pokémons.
 *     responses:
 *       200:
 *         description: Una lista de Pokémons.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pokemons:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       url:
 *                         type: string
 *                 total:
 *                   type: integer
 *                 totalPages:
 *                   type: integer
 *                 limit:
 *                   type: integer
 *                 offset:
 *                   type: integer
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/pokemons', pokemonController.listPokemons);



/**
 * @openapi
 * /pokemon/{pokemonId}:
 *   get:
 *     summary: Obtiene detalles de un Pokémon específico.
 *     description: Retorna información detallada de un Pokémon específico identificado por su ID único. Este endpoint requiere autenticación.
 *     parameters:
 *       - in: path
 *         name: pokemonId
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID del Pokémon del cual se quieren obtener detalles.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Detalles del Pokémon solicitado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: El identificador único del Pokémon.
 *                 name:
 *                   type: string
 *                   description: El nombre del Pokémon.
 *                 height:
 *                   type: integer
 *                   description: La altura del Pokémon.
 *                 weight:
 *                   type: integer
 *                   description: El peso del Pokémon.
 *                 types:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       slot:
 *                         type: integer
 *                       type:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           url:
 *                             type: string
 *                 sprites:
 *                   type: object
 *                   properties:
 *                     front_default:
 *                       type: string
 *                       description: URL de la imagen frontal por defecto del Pokémon.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/pokemon/:pokemonId',authenticateToken, pokemonController.getPokemonDetails);



/**
 * @openapi
 * /search:
 *   get:
 *     summary: Busca Pokémon por nombre y/o tipo.
 *     description: Obtiene una lista de Pokémon filtrados por nombre y/o tipo. Este endpoint requiere autenticación y puede combinar ambos filtros.
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: El nombre del Pokémon a buscar.
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         required: false
 *         description: El tipo de Pokémon a buscar.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Retorna una lista de Pokémon filtrados por los criterios proporcionados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: El nombre del Pokémon.
 *                   url:
 *                     type: string
 *                     description: URL hacia los detalles del Pokémon en la PokeAPI.
 *       404:
 *         description: No se encontraron Pokémon que coincidan con los criterios.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error indicando que no se encontraron Pokémon.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/search', authenticateToken, pokemonController.getPokemons);


router.get('/generate-token', tokenController.generateToken )



export default router;