import { Repository } from "typeorm";
import Company from "../../entities/company.entity";
import { AppDataSource } from "../../data-source";
import { ICompany } from "../../interfaces/company.interfaces";
import { AppError } from "../../errors";

const getOneCompanyService = async (userId: string): Promise<ICompany> => {
  const companyRepository: Repository<Company> =
    AppDataSource.getRepository(Company);

  const company: ICompany | null = await companyRepository.findOne({
    where: {
      id: userId,
    },
    relations: ["employees"],
  });

  if (!company) {
    throw new AppError("Company not found", 404);
  }

  return company;
};

export { getOneCompanyService };
