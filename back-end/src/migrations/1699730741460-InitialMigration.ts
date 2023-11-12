import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1699730741460 implements MigrationInterface {
    name = 'InitialMigration1699730741460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`companies\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employees\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`companyId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD CONSTRAINT \`FK_c7b030a4514a003d9d8d31a812b\` FOREIGN KEY (\`companyId\`) REFERENCES \`companies\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employees\` DROP FOREIGN KEY \`FK_c7b030a4514a003d9d8d31a812b\``);
        await queryRunner.query(`DROP TABLE \`employees\``);
        await queryRunner.query(`DROP TABLE \`companies\``);
    }

}
