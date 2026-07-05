import express, { type Express, type Request, type Response } from 'express';
import dotenv from "dotenv";

// env scoped to the backend
dotenv.config({ path: './.env' });

// Add local import statements here
import scentRouter from './api/v1/routes/scentRoutes.ts';

const app: Express = express();

// Middleware
app.use(express.json())

// Health Check
app.get('/', (_req: Request, res: Response) => {
  res.send('Health Check, everything good?');
});

// Routes
app.use("/api/v1", scentRouter)

export default app