"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomizeTemperatures = exports.getAverageTemperature = exports.updateTemperature = exports.createTemperature = exports.getAllTemperatures = void 0;
const temperatureService = __importStar(require("../services/temperature_service"));
const temperature_dto_1 = require("../dto/temperature_dto");
const zod_error_1 = __importDefault(require("../helpers/zod_error"));
const getAllTemperatures = async (req, res) => {
    try {
        const temps = await temperatureService.getAllTemperatures();
        res.status(200).json({ data: temps });
    }
    catch (error) {
        console.error("Error fetching temperatures:", error);
        res.status(500).json({ message: "Failed to fetch temperatures" });
    }
};
exports.getAllTemperatures = getAllTemperatures;
const createTemperature = async (req, res) => {
    try {
        const parsed = temperature_dto_1.CreateTemperatureDto.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Validation error",
                errors: (0, zod_error_1.default)(parsed.error),
            });
        }
        const created = await temperatureService.createTemperature(parsed.data);
        res
            .status(201)
            .json({ message: "Temperature created successfully", data: created });
    }
    catch (error) {
        console.error("Error creating temperature:", error);
        res.status(500).json({ message: "Failed to create temperature" });
    }
};
exports.createTemperature = createTemperature;
const updateTemperature = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid temperature ID" });
        }
        const parsed = temperature_dto_1.UpdateTemperatureDto.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Validation error",
                errors: (0, zod_error_1.default)(parsed.error),
            });
        }
        const updated = await temperatureService.updateTemperature(id, parsed.data.value);
        res.status(200).json({
            message: "Temperature updated successfully",
            data: updated,
        });
    }
    catch (error) {
        console.error("Error updating temperature:", error);
        res.status(500).json({ message: "Failed to update temperature" });
    }
};
exports.updateTemperature = updateTemperature;
const getAverageTemperature = async (req, res) => {
    try {
        const avg = await temperatureService.getAverageTemperature();
        res.status(200).json({ data: { average: avg } });
    }
    catch (error) {
        console.error("Error getting average temperature:", error);
        res.status(500).json({ message: "Failed to calculate average" });
    }
};
exports.getAverageTemperature = getAverageTemperature;
const randomizeTemperatures = async (req, res) => {
    try {
        const result = await temperatureService.randomizeTemperatures();
        res.status(200).json({ data: result });
    }
    catch (error) {
        console.error("Error randomizing temperatures:", error);
        res.status(500).json({ message: "Failed to randomize temperatures" });
    }
};
exports.randomizeTemperatures = randomizeTemperatures;
//# sourceMappingURL=temperature_controller.js.map