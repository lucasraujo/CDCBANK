import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Employee from "../../entities/employee.entity";
import { IEmployee} from "../../interfaces/employee.interfaces";
import { AppError } from "../../errors";


const deleteEmployeeServices = async (employeeId:string): Promise<void> =>{
    const employeeRepository: Repository<Employee> = AppDataSource.getRepository(Employee);

    const employee : IEmployee|null = await employeeRepository.findOne({
        where:{
            id:employeeId
        }

    })

    if(!employee){
        throw new AppError("company not found", 404)
    }

    await employeeRepository.delete(employee)

    
}

export { deleteEmployeeServices }