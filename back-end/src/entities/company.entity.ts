import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Employee from "./employee.entity";

@Entity("companies")
class Company {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @OneToMany(() => Employee, (employee) => employee.company)
  employees: Employee[];
}

export default Company;
