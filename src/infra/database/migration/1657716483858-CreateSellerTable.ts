import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSellerTable1657716483858 implements MigrationInterface {
    name = 'CreateSellerTable1657716483858'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "seller" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" datetime NOT NULL, "name" varchar NOT NULL, "visits" integer, "sales" integer, "total" integer)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "seller"`);
    }

}
