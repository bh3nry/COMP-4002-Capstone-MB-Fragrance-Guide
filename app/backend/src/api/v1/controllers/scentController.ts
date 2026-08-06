import { type Request, type Response, type NextFunction } from "express";
import * as scentService from "../services/scentService.js"

export const getAllScents = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("Scent Controller: Calling Scent Service ...")
        const scentData = await scentService.getAllFromScentRepo()
        res.status(200).json({ data: scentData })

    } catch (error) {
        next(error)
    }
}

