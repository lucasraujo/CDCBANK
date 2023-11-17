import z from "zod";
import { employeeSchema } from "../schemas";
import {
  createEmployeeSchema,
  updateEmployeeSchema,
} from "../schemas/employee.schemas";

type IEmployee = z.infer<typeof employeeSchema>;
type IEmployeeCreate = z.infer<typeof createEmployeeSchema>;
type IEmployeeUpdate = z.infer<typeof updateEmployeeSchema>;

export { IEmployee, IEmployeeCreate, IEmployeeUpdate };
