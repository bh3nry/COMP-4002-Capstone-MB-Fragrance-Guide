import express, { Router } from "express";
import * as scentController from "../controllers/scentController.ts"

const scentRouter: Router = express.Router()

scentRouter.get("/scents", scentController.getAllScents)

export default scentRouter