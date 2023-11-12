import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Employee from "../../entities/employee.entity";
import { IEmployee} from "../../interfaces/employee.interfaces";


const getAllEmployeeServices = async (): Promise<IEmployee[]> =>{
    const employeeRepository: Repository<Employee> = AppDataSource.getRepository(Employee);

    const employees : IEmployee[]= await employeeRepository.find({
    })


    return employees
}

export { getAllEmployeeServices }