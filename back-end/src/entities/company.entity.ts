import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Employee from "./employee.entity";


@Entity("companies")
class Company {
    @PrimaryColumn()
    id:string

    @Column({ type: "varchar", length: 255 })
    name: string;

    @OneToMany(() => Employee, employee => employee.company, {createForeignKeyConstraints: false, eager: true})
    employees: Employee[];


}

export default Company