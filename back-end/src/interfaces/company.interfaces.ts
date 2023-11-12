import z from "zod"
import { companySchema, createCompanySchema } from "../schemas"

type ICompany = z.infer<typeof companySchema>
type ICompanyCreate = z.infer<typeof createCompanySchema>

export { ICompany, ICompanyCreate}
