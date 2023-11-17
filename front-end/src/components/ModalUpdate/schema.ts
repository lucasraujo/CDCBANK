import { z } from "zod";

export const employeeSchema = z.object({
  cpf: z.string().min(14, "Voce esqueceu algum digito"),
  name: z.string().max(120).min(1, "este campo e obrigatorio"),
  birthdate: z.string().min(1, "este campo e obrigatorio"),
  salary: z.string().min(1, "este campo e obrigatorio"),
});
