import { z } from "zod";

export const UpdateTemperatureDto = z.object({
  value: z
    .number({
      error: "Value is required",
    })
    .min(-50, "Temperature cannot be below -50°C")
    .max(100, "Temperature cannot exceed 100°C"),
});

export const CreateTemperatureDto = z.object({
  city: z.string().min(1, "City is required"),
  value: z
    .number({
      error: "Value is required",
    })
    .min(-50, "Temperature cannot be below -50°C")
    .max(100, "Temperature cannot exceed 100°C"),
});

export type CreateTemperatureInput = z.infer<typeof CreateTemperatureDto>;
export type UpdateTemperatureInput = z.infer<typeof UpdateTemperatureDto>;
