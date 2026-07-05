import express, { type Express, type Request, type Response } from 'express';
import dotenv from "dotenv";
import cors from "cors";

// env scoped to the backend
dotenv.config({ path: './.env' });

// Add local import statements here
import corsOptions from "../config/cors.ts";
import scentRouter from './api/v1/routes/scentRoutes.ts';

const app: Express = express()

// Middleware
app.use(cors(corsOptions));
app.use(express.json())
app.use(cors(corsOptions));

// Health Check
app.get('/', (_req: Request, res: Response) => {
  res.send('Health Check, everything good?');
});

// Routes
app.use("/api/v1", scentRouter)
app.use("/profile", profileRoutes);
app.use("/locations", locationRoutes);
 
export default app;

