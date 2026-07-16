import type { Request, Response, NextFunction } from "express";
import Joi from "joi";

const locationSchema = Joi.object({
    fragranceId: Joi.number().integer().min(1).required().messages({
        "number.base": "Fragrance ID must be a number",
        "any.required": "Fragrance ID is required",
    }),
    saleLocations: Joi.array().items(Joi.string().min(1)).min(1).required().messages({
        "array.base": "Sale locations must be an array",
        "array.min": "At least one sale location is required",
        "any.required": "Sale locations are required",
    }),
});

export const validateLocation = (req: Request, res: Response, next: NextFunction): void => {
    const { error } = locationSchema.validate(req.body, { abortEarly: false });
    if (error) {
        res.status(400).json({ error: error.details.map((d) => d.message) });
        return;
    }
    next();
};