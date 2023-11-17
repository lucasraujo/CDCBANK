import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1700181634860 implements MigrationInterface {
    name = 'InitialMigration1700181634860'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`employees\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`cpf\` varchar(11) NOT NULL, \`birthdate\` date NOT NULL, \`salary\` int NOT NULL, \`companyId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`companies\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD CONSTRAINT \`FK_c7b030a4514a003d9d8d31a812b\` FOREIGN KEY (\`companyId\`) REFERENCES \`companies\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`INSERT INTO \`companies\`(\`id\`, \`name\`) VALUES (DEFAULT, "CDC-Bank")`);
        await queryRunner.query(`INSERT INTO \`companies\`(\`id\`, \`name\`) VALUES (DEFAULT, "CDC-Saude")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employees\` DROP FOREIGN KEY \`FK_c7b030a4514a003d9d8d31a812b\``);
        await queryRunner.query(`DROP TABLE \`companies\``);
        await queryRunner.query(`DROP TABLE \`employees\``);
    }

}
