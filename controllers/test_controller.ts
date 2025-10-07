import { Request, Response } from "express";
// import * as testService from "../services/testService";

export const getTest = (req: Request, res: Response) => {
  const message = "Test endpoint is working!";
  res.json({ message });
};
