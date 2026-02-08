import { Request, Response } from "express";
import prisma from "../lib/prisma.js";

export const allCities = async (req: Request, res: Response) => {
    const cities = await prisma.city.findMany({
        include: {
            attractions:true,
            activities:true,
            stays:true,
            foods:true
        }
    })

    res.json({
        cities: cities,
        message: "All Cities"
    })
}