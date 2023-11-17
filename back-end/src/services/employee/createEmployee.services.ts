import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Employee from "../../entities/employee.entity";
import {
  IEmployee,
  IEmployeeCreate,
} from "../../interfaces/employee.interfaces";
import Company from "../../entities/company.entity";
import { AppError } from "../../errors";

const createEmployeeServices = async (
  companyId: string,
  employeeData: IEmployeeCreate
): Promise<IEmployee> => {
  const employeeRepository: Repository<Employee> =
    AppDataSource.getRepository(Employee);
  const companyRepository: Repository<Company> =
    AppDataSource.getRepository(Company);

  const company: Company | null = await companyRepository.findOne({
    where: {
      id: companyId,
    },
  });

  if (!company) {
    throw new AppError("company not found", 404);
  }

  const newUser = employeeRepository.create({
    ...employeeData,
    company: company,
  });
  await employeeRepository.save(newUser);

  return newUser;
};

export { createEmployeeServices };
