import express, { type Express, type Request, type Response } from 'express';
import dotenv from "dotenv";
import cors from "cors";

// env scoped to the backend
dotenv.config({ path: './.env' });

// Add local import statements here
import scentRouter from './api/v1/routes/scentRoutes.ts';
import corsOptions from "../config/cors";

const app: Express = express();

// Middleware
app.use(express.json())
app.use(cors(corsOptions));

// Health Check
app.get('/', (_req: Request, res: Response) => {
  res.send('Health Check, everything good?');
});

// Routes
app.use("/api/v1", scentRouter)

export default app