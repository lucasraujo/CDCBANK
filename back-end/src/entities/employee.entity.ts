import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Company from "./company.entity";


@Entity("employees")
class Employee {

    @PrimaryGeneratedColumn()
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