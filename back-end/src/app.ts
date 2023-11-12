import "express-async-errors";
import  express, {Application} from "express";
import { errorHandler } from "./errors";
import companyRoutes from "./routers/company.routes";
import employeeRoutes from "./routers/employee.routes"

const app : Application = express()
app.use(express.json())

app.use("/company", companyRoutes)
app.use("/employee", employeeRoutes)

app.use(errorHandler)
export default app