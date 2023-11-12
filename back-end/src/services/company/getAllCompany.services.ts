import { Repository } from "typeorm";
import Company from "../../entities/company.entity";
import { AppDataSource } from "../../data-source";
import { ICompany} from "../../interfaces/company.interfaces";


const getAllCompanyService = async (): Promise<ICompany[]> =>{

    const companyRepository: Repository<Company> = AppDataSource.getRepository(Company);
    const res : ICompany[]|null = await companyRepository.find({
        relations: ["employees"]
    })

    return res
} 

export { getAllCompanyService}