import express, { type Express, type Request, type Response } from 'express';
import dotenv from "dotenv";
import cors from "cors";

// env scoped to the backend
dotenv.config({ path: './.env' });

import profileRoutes from "./api/v1/routes/profileRoutes";
import locationRoutes from "./api/v1/routes/locationRoutes";

const app: Express = express();

// Add local import statements here
import corsOptions from "../config/cors.ts";
import scentRouter from './api/v1/routes/scentRoutes.ts';
import profileRoutes from './api/v1/routes/profileRoutes.ts';
import locationRoutes from './api/v1/routes/locationRoutes.ts';
import noteRoutes from './api/v1/routes/noteRoutes.ts';

const app: Express = express()

// Middleware
app.use(cors(corsOptions));
app.use(express.json())

// Health Check
app.get('/', (_req: Request, res: Response) => {
  res.send('Health Check, everything good?');
});

// Routes
app.use("/api/v1", scentRouter)
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/locations", locationRoutes);
app.use("/api/v1/notes", noteRoutes)
 
export default app;
