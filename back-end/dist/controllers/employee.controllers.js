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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployeeController = exports.getOneEmployeeController = exports.getAllEmployeeController = exports.updateEmployeeController = exports.createEmployeeController = void 0;
const createEmployee_services_1 = require("../services/employee/createEmployee.services");
const updateEmployee_services_1 = require("../services/employee/updateEmployee.services");
const getAllEmployee_services_1 = require("../services/employee/getAllEmployee.services");
const getOneEmployee_services_1 = require("../services/employee/getOneEmployee.services");
const deleteEmployee_services_1 = require("../services/employee/deleteEmployee.services");
const createEmployeeController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const companyId = request.params.companyId;
    const res = yield (0, createEmployee_services_1.createEmployeeServices)(companyId, request.body);
    return response.status(201).json(res);
});
exports.createEmployeeController = createEmployeeController;
const updateEmployeeController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeId = request.params.employeeId;
    const res = yield (0, updateEmployee_services_1.updateEmployeeServices)(employeeId, request.body);
    return response.status(200).json(res);
});
exports.updateEmployeeController = updateEmployeeController;
const getAllEmployeeController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, getAllEmployee_services_1.getAllEmployeeServices)();
    return response.status(200).json(res);
});
exports.getAllEmployeeController = getAllEmployeeController;
const getOneEmployeeController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeId = request.params.employeeId;
    const res = yield (0, getOneEmployee_services_1.getOneEmployeeServices)(employeeId);
    return response.status(200).json(res);
});
exports.getOneEmployeeController = getOneEmployeeController;
const deleteEmployeeController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeId = request.params.employeeId;
    const res = yield (0, deleteEmployee_services_1.deleteEmployeeServices)(employeeId);
    return response.status(200).json(res);
});
exports.deleteEmployeeController = deleteEmployeeController;
