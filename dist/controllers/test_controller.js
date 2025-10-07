"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTest = void 0;
// import * as testService from "../services/testService";
const getTest = (req, res) => {
    const message = "Test endpoint is working!";
    res.json({ message });
};
exports.getTest = getTest;
//# sourceMappingURL=test_controller.js.map