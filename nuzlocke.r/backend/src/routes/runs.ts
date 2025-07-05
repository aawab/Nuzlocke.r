import { Router } from 'express';
import { RunService } from '../services/run-service';

const router = Router();
const runService = new RunService();

// Get all runs
router.get('/', async (req, res) => {
  try {
    const runs = await runService.getAllRuns();
    res.json(runs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch runs' });
  }
});

// Create new run
router.post('/', async (req, res) => {
  try {
    const run = await runService.createRun(req.body);
    res.status(201).json(run);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create run' });
  }
});

// Get run by ID
router.get('/:id', async (req, res) => {
  try {
    const run = await runService.getRunById(req.params.id);
    if (!run) {
      return res.status(404).json({ error: 'Run not found' });
    }
    res.json(run);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch run' });
  }
});

export { router as runRoutes }; 