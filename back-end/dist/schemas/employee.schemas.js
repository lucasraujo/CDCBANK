"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployeeSchema = exports.createEmployeeSchema = exports.employeeSchema = void 0;
const zod_1 = require("zod");
const employeeSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    cpf: zod_1.z.string().length(11),
    birthdate: zod_1.z.string(),
    salary: zod_1.z.number(),
});
exports.employeeSchema = employeeSchema;
const createEmployeeSchema = employeeSchema.omit({
    id: true,
});
exports.createEmployeeSchema = createEmployeeSchema;
const updateEmployeeSchema = createEmployeeSchema.partial();
exports.updateEmployeeSchema = updateEmployeeSchema;
