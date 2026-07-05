import cors from "cors";
import corsOptions from "../config/cors";
import express from "express";
import type { Express } from "express";

const app: Express = express();

app.use(cors(corsOptions));

app.use(express.json());
 
// Routes
// put them here pls
 
export default app;