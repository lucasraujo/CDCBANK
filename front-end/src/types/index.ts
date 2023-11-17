export interface iEmployee {
  id: number;
  name: string;
  cpf: string;
  birthdate: string;
  salary: number;
}

export interface iEmployeeSalaryToString {
  id: number;
  name: string;
  cpf: string;
  birthdate: string;
  salary: string;
}

export interface iEmployeeRequest {
  name: string;
  cpf: string;
  birthdate: string;
  salary: string | number;
}

export interface iCompany {
  id: number;
  name: string;
  employees: iEmployee[];
}
