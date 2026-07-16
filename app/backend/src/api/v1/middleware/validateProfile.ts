import type { Request, Response, NextFunction } from "express";
import Joi from "joi";

const profileSchema = Joi.object({
    displayName: Joi.string().min(1).required().messages({
        "string.empty": "Display name is required",
        "any.required": "Display name is required",
    }),
    bio: Joi.string().min(1).required().messages({
        "string.empty": "Bio is required",
        "any.required": "Bio is required",
    }),
});


export const validateProfile = (req: Request, res: Response, next: NextFunction): void => {
    const { error } = profileSchema.validate(req.body, { abortEarly: false });
    if (error) {
        res.status(400).json({ error: error.details.map((d) => d.message) });
        return;
    }
    next();
};