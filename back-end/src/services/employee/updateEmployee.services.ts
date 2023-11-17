import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Employee from "../../entities/employee.entity";
import {
  IEmployee,
  IEmployeeCreate,
  IEmployeeUpdate,
} from "../../interfaces/employee.interfaces";
import Company from "../../entities/company.entity";
import { AppError } from "../../errors";
import { error } from "console";

const updateEmployeeServices = async (
  employeeId: string,
  employeeData: any
): Promise<IEmployee> => {
  const employeeRepository: Repository<Employee> =
    AppDataSource.getRepository(Employee);

  const employee = await employeeRepository.findOne({
    where: {
      id: employeeId,
    },
  });

  if (employee == null) {
    throw new AppError("employee not found", 404);
  }

  const objUpdate: IEmployeeCreate = { ...employee, ...employeeData };

  const newUser = employeeRepository.create(objUpdate);

  await employeeRepository.save(newUser);

  return newUser;
};

export { updateEmployeeServices };
