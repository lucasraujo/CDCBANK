"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFieldsToEmployee1699732826606 = void 0;
class AddFieldsToEmployee1699732826606 {
    constructor() {
        this.name = 'AddFieldsToEmployee1699732826606';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`employees\` ADD \`cpf\` varchar(11) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`employees\` ADD UNIQUE INDEX \`IDX_0ac9216832e4dda06946c37cb7\` (\`cpf\`)`);
            yield queryRunner.query(`ALTER TABLE \`employees\` ADD \`birthdate\` date NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`employees\` ADD \`salary\` decimal(10,2) NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`employees\` DROP COLUMN \`salary\``);
            yield queryRunner.query(`ALTER TABLE \`employees\` DROP COLUMN \`birthdate\``);
            yield queryRunner.query(`ALTER TABLE \`employees\` DROP INDEX \`IDX_0ac9216832e4dda06946c37cb7\``);
            yield queryRunner.query(`ALTER TABLE \`employees\` DROP COLUMN \`cpf\``);
        });
    }
}
exports.AddFieldsToEmployee1699732826606 = AddFieldsToEmployee1699732826606;
