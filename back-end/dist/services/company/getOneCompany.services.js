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
exports.getOneCompanyService = void 0;
const company_entity_1 = __importDefault(require("../../entities/company.entity"));
const data_source_1 = require("../../data-source");
const errors_1 = require("../../errors");
const getOneCompanyService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const companyRepository = data_source_1.AppDataSource.getRepository(company_entity_1.default);
    const company = yield companyRepository.findOne({
        where: {
            id: userId
        },
        relations: ["employees"]
    });
    if (!company) {
        throw new errors_1.AppError("Company not found", 404);
    }
    return company;
});
exports.getOneCompanyService = getOneCompanyService;
