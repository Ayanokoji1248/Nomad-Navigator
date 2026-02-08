import { Router } from "express";
import { allCities } from "../controller/city.controller.js";
const cityRouter = Router()

cityRouter.get('/all', allCities)


export default cityRouter;