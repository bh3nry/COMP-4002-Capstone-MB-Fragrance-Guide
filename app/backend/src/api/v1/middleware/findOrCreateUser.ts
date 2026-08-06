import * as userService from "../services/userService.js";
import type { Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";

export interface AuthenticatedRequest extends Request {
  userId?: string | null;
}

export const findOrCreateUser = async (
    req: AuthenticatedRequest,
    _res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const auth = getAuth(req);
        const userId = auth.userId;

        if(userId) {
            let backendUser = await userService.getUserById(userId);
            if(!backendUser) {
                backendUser= await userService.createUser({id: userId});
            }
        }
        
        req.userId = userId;
        next();

    } catch(error) {
        next(error);
    }
}