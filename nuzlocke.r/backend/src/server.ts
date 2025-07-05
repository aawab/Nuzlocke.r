import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { pokemonRoutes } from './routes/pokemon';
import { runRoutes } from './routes/runs';
import { encounterRoutes } from './routes/encounters';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/pokemon', pokemonRoutes);
app.use('/api/runs', runRoutes);
app.use('/api/encounters', encounterRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    project: 'Nuzlocke.r - Pokemon Nuzlocke Tracker',
    author: 'Aawab',
    version: '1.0.0'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Nuzlocke.r API',
    author: 'Aawab',
    description: 'Pokemon Nuzlocke Tracker Backend API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      pokemon: '/api/pokemon',
      runs: '/api/runs',
      encounters: '/api/encounters'
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Nuzlocke.r API Server running on port ${PORT}`);
  console.log(`📱 Created by Aawab`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
}); 