import { Router } from 'express';
import { PokemonService } from '../services/pokemon-service';

const router = Router();
const pokemonService = new PokemonService();

// Get all Pokemon
router.get('/', async (req, res) => {
  try {
    const pokemon = await pokemonService.getAllPokemon();
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Pokemon' });
  }
});

// Get Pokemon by ID
router.get('/:id', async (req, res) => {
  try {
    const pokemon = await pokemonService.getPokemonById(parseInt(req.params.id));
    if (!pokemon) {
      return res.status(404).json({ error: 'Pokemon not found' });
    }
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Pokemon' });
  }
});

// Get routes
router.get('/routes/all', async (req, res) => {
  try {
    const routes = await pokemonService.getAllRoutes();
    res.json(routes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch routes' });
  }
});

// Get natures
router.get('/natures/all', async (req, res) => {
  try {
    const natures = await pokemonService.getAllNatures();
    res.json(natures);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch natures' });
  }
});

export { router as pokemonRoutes }; 