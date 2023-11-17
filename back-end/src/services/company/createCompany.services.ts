import { Repository } from "typeorm";
import Company from "../../entities/company.entity";
import { AppDataSource } from "../../data-source";
import { ICompany, ICompanyCreate } from "../../interfaces/company.interfaces";
import { companySchema } from "../../schemas";
import { AppError } from "../../errors";

const createCompanyService = async (
  companyDate: ICompanyCreate
): Promise<ICompany> => {
  const companyRepository: Repository<Company> =
    AppDataSource.getRepository(Company);
  const newCompany: ICompany = companyRepository.create(companyDate);

  const unique: ICompany | null = await companyRepository.findOne({
    where: {
      name: companyDate.name,
    },
  });

  if (unique) {
    throw new AppError("Company already exists", 409);
  }

  await companyRepository.save(newCompany);
  return newCompany;
};

export { createCompanyService };
