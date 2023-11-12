import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFieldsToEmployee1699732826606 implements MigrationInterface {
    name = 'AddFieldsToEmployee1699732826606'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employees\` ADD \`cpf\` varchar(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD UNIQUE INDEX \`IDX_0ac9216832e4dda06946c37cb7\` (\`cpf\`)`);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD \`birthdate\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD \`salary\` decimal(10,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employees\` DROP COLUMN \`salary\``);
        await queryRunner.query(`ALTER TABLE \`employees\` DROP COLUMN \`birthdate\``);
        await queryRunner.query(`ALTER TABLE \`employees\` DROP INDEX \`IDX_0ac9216832e4dda06946c37cb7\``);
        await queryRunner.query(`ALTER TABLE \`employees\` DROP COLUMN \`cpf\``);
    }

}
