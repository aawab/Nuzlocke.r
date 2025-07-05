import { Router } from 'express';
import { EncounterService } from '../services/encounter-service';

const router = Router();
const encounterService = new EncounterService();

// Get encounters for run
router.get('/run/:runId', async (req, res) => {
  try {
    const encounters = await encounterService.getEncountersForRun(req.params.runId);
    res.json(encounters);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch encounters' });
  }
});

// Create encounter
router.post('/', async (req, res) => {
  try {
    const encounter = await encounterService.createEncounter(req.body);
    res.status(201).json(encounter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create encounter' });
  }
});

// Update encounter
router.put('/:id', async (req, res) => {
  try {
    const encounter = await encounterService.updateEncounter(req.params.id, req.body);
    res.json(encounter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update encounter' });
  }
});

export { router as encounterRoutes }; 