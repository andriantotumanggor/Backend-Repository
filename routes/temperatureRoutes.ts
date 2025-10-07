import { Router } from "express";
import * as temperatureController from "../controllers/temperature_controller";

const router = Router();

router.get("/", temperatureController.getAllTemperatures);

router.post("/", temperatureController.createTemperature);

router.put("/:id", temperatureController.updateTemperature);

router.get("/average", temperatureController.getAverageTemperature);

router.patch("/randomize", temperatureController.randomizeTemperatures);

export default router;
