export declare const getAllTemperatures: () => Promise<{
    id: number;
    city: string;
    value: number;
    updatedAt: Date;
    createdAt: Date;
}[]>;
export declare const updateTemperature: (id: number, value: number) => Promise<{
    id: number;
    city: string;
    value: number;
    updatedAt: Date;
    createdAt: Date;
}>;
export declare const createTemperature: (data: {
    city: string;
    value: number;
}) => Promise<{
    id: number;
    city: string;
    value: number;
    updatedAt: Date;
    createdAt: Date;
}>;
export declare const getAverageTemperature: () => Promise<number>;
export declare const randomizeTemperatures: () => Promise<{
    message: string;
}>;
//# sourceMappingURL=temperature_service.d.ts.map