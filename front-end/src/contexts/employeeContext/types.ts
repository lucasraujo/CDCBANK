import { iCompany, iEmployee, iEmployeeRequest } from "../../types";

export interface iEmployeeProvider {
  children: React.ReactNode;
}

export interface iEmployeeContext {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  employeeToDelete: iEmployee | null;
  setEmployeeToDelete: React.Dispatch<React.SetStateAction<iEmployee | null>>;
  employeeToUpdate: iEmployee | null;
  setEmployeeToUpdate: React.Dispatch<React.SetStateAction<iEmployee | null>>;
  createEmployee: (data: iEmployeeRequest, company: iCompany) => Promise<void>;
  deleteEmployee: (id: number) => Promise<void>;
  updateEmployee: (data: iEmployeeRequest) => Promise<void>;
  valueUpdateSalary: string;
  openModalUpdate: (data: iEmployee) => void;
  setValueUpdateSalary: React.Dispatch<React.SetStateAction<string>>;
  valueUpdateCpf: string;
  setValueUpdateCpf: React.Dispatch<React.SetStateAction<string>>;
}
