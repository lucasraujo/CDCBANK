import { DataSource, Repository } from "typeorm";
import { Seeder } from "typeorm-extension";
import { SeederFactoryManager } from "typeorm-extension/dist/seeder";
import Company from "../entities/company.entity";

class CompanySeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const companyRepository: Repository<Company> =
      dataSource.getRepository(Company);

    const seed1Exists = await companyRepository.findOne({
      where: {
        name: "CDC-Bank",
      },
    });

    if (!seed1Exists) {
      const companyData = {
        name: "CDC-Bank",
      };

      const newCompany = companyRepository.create(companyData);
      await companyRepository.save(newCompany);
    }

    const seed2Exists = await companyRepository.findOne({
      where: {
        name: "CDC-Saude",
      },
    });

    if (!seed2Exists) {
      const companyData = {
        name: "CDC-Saude",
      };

      const newCompany = companyRepository.create(companyData);
      await companyRepository.save(newCompany);
    }
  }
}

export { CompanySeeder };
