import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Employee from "../../entities/employee.entity";
import { IEmployee} from "../../interfaces/employee.interfaces";
import { AppError } from "../../errors";


const getOneEmployeeServices = async (employeeId:string): Promise<IEmployee> =>{
    const employeeRepository: Repository<Employee> = AppDataSource.getRepository(Employee);

    const employees : IEmployee|null = await employeeRepository.findOne({
        where:{
            id:employeeId
        }

    })

    if(!employees){
        throw new AppError("company not found", 404)
    }

    return employees
}

export { getOneEmployeeServices }