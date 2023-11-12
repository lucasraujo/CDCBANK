import { z } from "zod";

const employeeSchema = z.object({
  id: z.string(),
  name: z.string(),
  cpf: z.string().length(11),
  birthdate: z.string(),
  salary: z.number(),

});

const createEmployeeSchema = employeeSchema.omit({
    id:true,
})

const updateEmployeeSchema = createEmployeeSchema.partial()

export { employeeSchema, createEmployeeSchema, updateEmployeeSchema }
