"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployeeServices = void 0;
const data_source_1 = require("../../data-source");
const employee_entity_1 = __importDefault(require("../../entities/employee.entity"));
const errors_1 = require("../../errors");
const deleteEmployeeServices = (employeeId) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeRepository = data_source_1.AppDataSource.getRepository(employee_entity_1.default);
    const employee = yield employeeRepository.findOne({
        where: {
            id: employeeId
        }
    });
    if (!employee) {
        throw new errors_1.AppError("company not found", 404);
    }
    yield employeeRepository.delete(employee);
});
exports.deleteEmployeeServices = deleteEmployeeServices;
