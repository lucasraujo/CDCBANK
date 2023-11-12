import z from "zod"
import { employeeSchema } from "./employee.schemas";

const companySchema = z.object({
    id: z.string(),
    name: z.string(),
    employees: z.array(employeeSchema),
});

const createCompanySchema = companySchema.omit({
    id:true,
    employees:true,
})


export { companySchema, createCompanySchema }