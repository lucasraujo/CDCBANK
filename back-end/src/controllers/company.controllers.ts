import { Response, Request } from "express";
import { createCompanyService } from "../services/company/createCompany.services";
import { getAllCompanyService } from "../services/company/getAllCompany.services";
import { getOneCompanyService } from "../services/company/getOneCompany.services";

const createCompanyController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const res = await createCompanyService(request.body);
  return response.status(201).json(res);
};

const getAllCompanyController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const res = await getAllCompanyService();
  return response.status(200).json(res);
};

const getOneCompanyController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id = request.params.companyId;
  const res = await getOneCompanyService(id);
  return response.status(200).json(res);
};

export {
  createCompanyController,
  getAllCompanyController,
  getOneCompanyController,
};
