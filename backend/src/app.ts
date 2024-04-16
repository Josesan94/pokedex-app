import express from 'express';
import cors from 'cors';
import pokemonRoutes from './routes/pokemon.routes'
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', pokemonRoutes);

export default app;