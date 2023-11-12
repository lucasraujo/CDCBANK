import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveLogicOfEntities1699753880354 implements MigrationInterface {
    name = 'RemoveLogicOfEntities1699753880354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employees\` DROP COLUMN \`salary\``);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD \`salary\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employees\` DROP COLUMN \`salary\``);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD \`salary\` decimal NOT NULL`);
    }

}
