"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTemperatureDto = exports.UpdateTemperatureDto = void 0;
const zod_1 = require("zod");
exports.UpdateTemperatureDto = zod_1.z.object({
    value: zod_1.z
        .number({
        error: "Value is required",
    })
        .min(-50, "Temperature cannot be below -50°C")
        .max(100, "Temperature cannot exceed 100°C"),
});
exports.CreateTemperatureDto = zod_1.z.object({
    city: zod_1.z.string().min(1, "City is required"),
    value: zod_1.z
        .number({
        error: "Value is required",
    })
        .min(-50, "Temperature cannot be below -50°C")
        .max(100, "Temperature cannot exceed 100°C"),
});
//# sourceMappingURL=temperature_dto.js.map