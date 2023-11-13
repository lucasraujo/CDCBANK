import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Company from "./company.entity";


@Entity("employees")
class Employee {

    @PrimaryColumn()
    id:string

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({type:"varchar", length:11, unique:true})
    cpf:string;

    @Column({type:"date"})
    birthdate:string;

    @Column({type:"int"})
    salary:number;


    @ManyToOne(() => Company, company => company.employees)
    company: Company;

}

export default Employee