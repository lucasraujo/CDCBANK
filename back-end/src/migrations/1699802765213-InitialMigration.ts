import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1699802765213 implements MigrationInterface {
    name = 'InitialMigration1699802765213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`employees\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`cpf\` varchar(11) NOT NULL, \`birthdate\` date NOT NULL, \`salary\` int NOT NULL, \`companyId\` int NULL, UNIQUE INDEX \`IDX_0ac9216832e4dda06946c37cb7\` (\`cpf\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`companies\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD CONSTRAINT \`FK_c7b030a4514a003d9d8d31a812b\` FOREIGN KEY (\`companyId\`) REFERENCES \`companies\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employees\` DROP FOREIGN KEY \`FK_c7b030a4514a003d9d8d31a812b\``);
        await queryRunner.query(`DROP TABLE \`companies\``);
        await queryRunner.query(`DROP INDEX \`IDX_0ac9216832e4dda06946c37cb7\` ON \`employees\``);
        await queryRunner.query(`DROP TABLE \`employees\``);
    }

}
