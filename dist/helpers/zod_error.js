"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatZodErrors = (error) => {
    return error.errors?.map((e) => ({
        path: e.path.join("."),
        message: e.message,
    }));
};
exports.default = formatZodErrors;
//# sourceMappingURL=zod_error.js.map