import { Request, Response } from "express";
import * as temperatureService from "../services/temperature_service";
import { UpdateTemperatureDto } from "../dto/temperature_dto";

export const getAllTemperatures = async (req: Request, res: Response) => {
  try {
    const temps = await temperatureService.getAllTemperatures();
    res.status(200).json(temps);
  } catch (error) {
    console.error("Error fetching temperatures:", error);
    res.status(500).json({ message: "Failed to fetch temperatures" });
  }
};

export const updateTemperature = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid temperature ID" });
    }

    const parsed = UpdateTemperatureDto.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: "Validation error",
        errors: parsed.error.format(),
      });
    }

    const updated = await temperatureService.updateTemperature(
      id,
      parsed.data.value
    );
    res.status(200).json({
      message: "Temperature updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating temperature:", error);
    res.status(500).json({ message: "Failed to update temperature" });
  }
};

export const getAverageTemperature = async (req: Request, res: Response) => {
  try {
    const avg = await temperatureService.getAverageTemperature();
    res.status(200).json({ average: avg });
  } catch (error) {
    console.error("Error getting average temperature:", error);
    res.status(500).json({ message: "Failed to calculate average" });
  }
};

export const randomizeTemperatures = async (req: Request, res: Response) => {
  try {
    const result = await temperatureService.randomizeTemperatures();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error randomizing temperatures:", error);
    res.status(500).json({ message: "Failed to randomize temperatures" });
  }
};
