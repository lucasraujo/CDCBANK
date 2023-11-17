import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  createEmployeeController,
  deleteEmployeeController,
  getAllEmployeeController,
  getOneEmployeeController,
  updateEmployeeController,
} from "../controllers/employee.controllers";
import {
  createEmployeeSchema,
  updateEmployeeSchema,
} from "../schemas/employee.schemas";

const employeeRoutes: Router = Router();

employeeRoutes.post(
  "/:companyId",
  ensureDataIsValidMiddleware(createEmployeeSchema),
  createEmployeeController
);
employeeRoutes.patch(
  "/:employeeId",
  ensureDataIsValidMiddleware(updateEmployeeSchema),
  updateEmployeeController
);
employeeRoutes.get("", getAllEmployeeController);
employeeRoutes.get("/:employeeId", getOneEmployeeController);
employeeRoutes.delete("/:employeeId", deleteEmployeeController);

export default employeeRoutes;
