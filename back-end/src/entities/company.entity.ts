import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Employee from "./employee.entity";
import { join } from "path";


@Entity("companies")
class Company {
    @PrimaryColumn()
    id:string

    @Column({ type: "varchar", length: 255 })
    name: string;

    @OneToMany(() => Employee, employee => employee.company)
    @JoinColumn()
    employees: Employee[];


}

export default Company