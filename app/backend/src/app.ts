import cors from "cors";
import corsOptions from "../config/cors";
import express from "express";
import type { Express } from "express";

import profileRoutes from "./api/v1/routes/profileRoutes";

const app: Express = express();

app.use(cors(corsOptions));

app.use(express.json());
 
// Routes
app.use("/profile", profileRoutes);
 
export default app;