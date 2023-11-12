"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompanySchema = exports.companySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const employee_schemas_1 = require("./employee.schemas");
const companySchema = zod_1.default.object({
    id: zod_1.default.string(),
    name: zod_1.default.string(),
    employees: zod_1.default.array(employee_schemas_1.employeeSchema),
});
exports.companySchema = companySchema;
const createCompanySchema = companySchema.omit({
    id: true,
    employees: true,
});
exports.createCompanySchema = createCompanySchema;
