import { Router } from "express";
import {
  createCompanyController,
  getAllCompanyController,
  getOneCompanyController,
} from "../controllers/company.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createCompanySchema } from "../schemas";

const companyRoutes: Router = Router();

companyRoutes.post(
  "",
  ensureDataIsValidMiddleware(createCompanySchema),
  createCompanyController
);
companyRoutes.get("", getAllCompanyController);
companyRoutes.get("/:companyId", getOneCompanyController);

export default companyRoutes;
