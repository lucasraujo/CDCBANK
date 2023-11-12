"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const errors_1 = require("./errors");
const company_routes_1 = __importDefault(require("./routers/company.routes"));
const employee_routes_1 = __importDefault(require("./routers/employee.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/company", company_routes_1.default);
app.use("/employee", employee_routes_1.default);
app.use(errors_1.errorHandler);
exports.default = app;
