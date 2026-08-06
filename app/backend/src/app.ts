import express, { type Express, type Request, type Response } from 'express';
import dotenv from "dotenv";
import cors from "cors";
import { clerkMiddleware, getAuth } from "@clerk/express";


// env scoped to the backend
dotenv.config({ path: './.env' });

// Add local import statements here
import corsOptions from "../config/cors.js";
import scentRouter from './api/v1/routes/scentRoutes.js';
import profileRoutes from './api/v1/routes/profileRoutes.js';
import locationRoutes from './api/v1/routes/locationRoutes.js';
import noteRoutes from './api/v1/routes/noteRoutes.js';
import tagRoutes from './api/v1/routes/tagRoutes.js';

const app: Express = express()

// Middleware
app.use(cors(corsOptions));
app.use(express.json())

//  Above backend middleware so that guests can interact with the home page.
app.use("/api/v1", scentRouter)

// clerk middleware
app.use(clerkMiddleware());

// Health Check
app.get('/', (_req: Request, res: Response) => {
  res.send('Health Check, everything good?');
});

// Routes
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/locations", locationRoutes);
app.use("/api/v1/notes", noteRoutes)
app.use("/api/v1/tags", tagRoutes);
 
export default app;
