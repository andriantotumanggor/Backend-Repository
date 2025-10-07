"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomizeTemperatures = exports.getAverageTemperature = exports.createTemperature = exports.updateTemperature = exports.getAllTemperatures = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const getAllTemperatures = async () => {
    return await prisma_1.default.temperature.findMany();
};
exports.getAllTemperatures = getAllTemperatures;
const updateTemperature = async (id, value) => {
    return await prisma_1.default.temperature.update({
        where: { id },
        data: { value },
    });
};
exports.updateTemperature = updateTemperature;
const createTemperature = async (data) => {
    // Cek apakah city sudah ada
    const existing = await prisma_1.default.temperature.findUnique({
        where: { city: data.city },
    });
    if (existing) {
        throw new Error(`City "${data.city}" already exists`);
    }
    // Kalau belum ada, baru buat
    return prisma_1.default.temperature.create({
        data: {
            city: data.city,
            value: data.value,
        },
    });
};
exports.createTemperature = createTemperature;
const getAverageTemperature = async () => {
    const result = await prisma_1.default.temperature.aggregate({
        _avg: { value: true },
    });
    return result._avg.value ?? 0;
};
exports.getAverageTemperature = getAverageTemperature;
const randomizeTemperatures = async () => {
    const temps = await prisma_1.default.temperature.findMany();
    const updates = temps.map((t) => prisma_1.default.temperature.update({
        where: { id: t.id },
        data: {
            value: Number((Math.random() * 40).toFixed(1)),
        },
    }));
    await Promise.all(updates);
    return { message: "Temperatures randomized" };
};
exports.randomizeTemperatures = randomizeTemperatures;
//# sourceMappingURL=temperature_service.js.map