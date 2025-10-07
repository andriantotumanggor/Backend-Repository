import { z } from "zod";
export declare const UpdateTemperatureDto: z.ZodObject<{
    value: z.ZodNumber;
}, z.core.$strip>;
export declare const CreateTemperatureDto: z.ZodObject<{
    city: z.ZodString;
    value: z.ZodNumber;
}, z.core.$strip>;
export type CreateTemperatureInput = z.infer<typeof CreateTemperatureDto>;
export type UpdateTemperatureInput = z.infer<typeof UpdateTemperatureDto>;
//# sourceMappingURL=temperature_dto.d.ts.map