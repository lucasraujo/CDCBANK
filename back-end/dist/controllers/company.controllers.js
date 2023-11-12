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
exports.getOneCompanyController = exports.getAllCompanyController = exports.createCompanyController = void 0;
const createCompany_services_1 = require("../services/company/createCompany.services");
const getAllCompany_services_1 = require("../services/company/getAllCompany.services");
const getOneCompany_services_1 = require("../services/company/getOneCompany.services");
const createCompanyController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, createCompany_services_1.createCompanyService)(request.body);
    return response.status(201).json(res);
});
exports.createCompanyController = createCompanyController;
const getAllCompanyController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, getAllCompany_services_1.getAllCompanyService)();
    return response.status(200).json(res);
});
exports.getAllCompanyController = getAllCompanyController;
const getOneCompanyController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.companyId;
    const res = yield (0, getOneCompany_services_1.getOneCompanyService)(id);
    return response.status(200).json(res);
});
exports.getOneCompanyController = getOneCompanyController;
