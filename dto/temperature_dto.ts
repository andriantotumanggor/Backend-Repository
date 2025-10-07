import { z } from "zod";

export const UpdateTemperatureDto = z.object({
  value: z
    .number({
      error: "Value is required",
    })
    .min(-50, "Temperature cannot be below -50°C")
    .max(100, "Temperature cannot exceed 100°C"),
});

export type UpdateTemperatureInput = z.infer<typeof UpdateTemperatureDto>;
