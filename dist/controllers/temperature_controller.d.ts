import { Request, Response } from "express";
export declare const getAllTemperatures: (req: Request, res: Response) => Promise<void>;
export declare const createTemperature: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateTemperature: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAverageTemperature: (req: Request, res: Response) => Promise<void>;
export declare const randomizeTemperatures: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=temperature_controller.d.ts.map