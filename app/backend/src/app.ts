import cors from "cors";
import corsOptions from "../config/cors";
import express from "express";
import type { Express } from "express";

import profileRoutes from "./api/v1/routes/profileRoutes";
import locationRoutes from "./api/v1/routes/locationRoutes";

const app: Express = express();

app.use(cors(corsOptions));

app.use(express.json());
 
// Routes
app.use("/profile", profileRoutes);
app.use("/locations", locationRoutes);
 
export default app;