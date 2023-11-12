import { Request, Response } from "express"
import { createEmployeeServices } from "../services/employee/createEmployee.services"
import { updateEmployeeServices } from "../services/employee/updateEmployee.services"
import { getAllEmployeeServices } from "../services/employee/getAllEmployee.services"
import { getOneEmployeeServices } from "../services/employee/getOneEmployee.services"
import { deleteEmployeeServices } from "../services/employee/deleteEmployee.services"


const createEmployeeController = async (request:Request, response:Response) : Promise<Response> => {

    const companyId = request.params.companyId
    const res = await createEmployeeServices(companyId, request.body)
    return response.status(201).json(res)

}

const updateEmployeeController = async (request:Request, response:Response) : Promise<Response> => {

    const employeeId = request.params.employeeId
    const res = await updateEmployeeServices(employeeId, request.body)
    return response.status(200).json(res)

}

const getAllEmployeeController = async (request:Request, response:Response) : Promise<Response> => {

    const res = await getAllEmployeeServices()
    return response.status(200).json(res)

}

const getOneEmployeeController = async (request:Request, response:Response) : Promise<Response> => {

    const employeeId = request.params.employeeId
    const res = await getOneEmployeeServices(employeeId) 
    return response.status(200).json(res)

}

const deleteEmployeeController = async (request:Request, response:Response) : Promise<Response> => {

    const employeeId = request.params.employeeId
    const res = await deleteEmployeeServices(employeeId) 
    return response.status(200).json(res)

}

export { createEmployeeController, updateEmployeeController, getAllEmployeeController, getOneEmployeeController, deleteEmployeeController }