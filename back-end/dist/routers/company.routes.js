"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const company_controllers_1 = require("../controllers/company.controllers");
const ensureDataIsValid_middleware_1 = require("../middlewares/ensureDataIsValid.middleware");
const schemas_1 = require("../schemas");
const companyRoutes = (0, express_1.Router)();
companyRoutes.post('', (0, ensureDataIsValid_middleware_1.ensureDataIsValidMiddleware)(schemas_1.createCompanySchema), company_controllers_1.createCompanyController);
companyRoutes.get('', company_controllers_1.getAllCompanyController);
companyRoutes.get('/:companyId', company_controllers_1.getOneCompanyController);
exports.default = companyRoutes;