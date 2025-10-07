import { Request, Response } from "express";

import * as temperatureService from "../services/temperature_service";
import {
  CreateTemperatureDto,
  UpdateTemperatureDto,
} from "../dto/temperature_dto";
import formatZodErrors from "../helpers/zod_error";

export const getAllTemperatures = async (req: Request, res: Response) => {
  try {
    const temps = await temperatureService.getAllTemperatures();
    res.status(200).json({ data: temps });
  } catch (error) {
    console.error("Error fetching temperatures:", error);
    res.status(500).json({ message: "Failed to fetch temperatures" });
  }
};

export const createTemperature = async (req: Request, res: Response) => {
  try {
    const parsed = CreateTemperatureDto.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        message: "Validation error",
        errors: formatZodErrors(parsed.error),
      });
    }
    const created = await temperatureService.createTemperature(parsed.data);
    res
      .status(201)
      .json({ message: "Temperature created successfully", data: created });
  } catch (error) {
    console.error("Error creating temperature:", error);
    res.status(500).json({ message: "Failed to create temperature" });
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
        errors: formatZodErrors(parsed.error),
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
    res.status(200).json({ data: { average: avg } });
  } catch (error) {
    console.error("Error getting average temperature:", error);
    res.status(500).json({ message: "Failed to calculate average" });
  }
};

export const randomizeTemperatures = async (req: Request, res: Response) => {
  try {
    const result = await temperatureService.randomizeTemperatures();

    res.status(200).json({ data: result });
  } catch (error) {
    console.error("Error randomizing temperatures:", error);
    res.status(500).json({ message: "Failed to randomize temperatures" });
  }
};
