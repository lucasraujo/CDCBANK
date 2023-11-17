import { createContext, useContext, useState } from "react";
import { iEmployeeContext, iEmployeeProvider } from "./types";
import api from "../../services/api";
import { iEmployeeRequest, iCompany, iEmployee } from "../../types";
import { DashboardContext } from "../dashboardContext";
import { currency, mask } from "remask";

export const EmployeeContext = createContext({} as iEmployeeContext);

export const EmployeeProvider = ({ children }: iEmployeeProvider) => {
  const [modalIsOpen, setModalIsOpen] = useState(false as boolean);
  const [employeeToDelete, setEmployeeToDelete] = useState<null | iEmployee>(
    null
  );
  const [employeeToUpdate, setEmployeeToUpdate] = useState<null | iEmployee>(
    null
  );
  const [valueUpdateCpf, setValueUpdateCpf] = useState(
    mask(employeeToUpdate?.cpf == null ? "" : employeeToUpdate.cpf, [
      "999.999.999-99",
    ]) as string
  );
  const { reload, setReload } = useContext(DashboardContext);

  const createEmployee = async (data: iEmployeeRequest, company: iCompany) => {
    try {
      await api.post(`/employee/${company.id}`, data);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async (id: number) => {
    try {
      await api.delete(`/employee/${id}`);
      setEmployeeToDelete(null);
      setReload(!reload);
    } catch (error) {
      console.error(error);
    }
  };

  const updateEmployee = async (data: iEmployeeRequest) => {
    try {
      await api.patch(`/employee/${employeeToUpdate!.id}`, data);
      setReload(!reload);
    } catch (error) {}
  };

  const [valueUpdateSalary, setValueUpdateSalary] = useState(
    currency.mask({
      locale: "pt-BR",
      currency: "BRL",
      value: employeeToUpdate?.salary == null ? 0 : employeeToUpdate.salary,
    })
  );

  const openModalUpdate = (data: iEmployee) => {
    setValueUpdateSalary(
      currency.mask({ locale: "pt-BR", currency: "BRL", value: data.salary })
    );
    setValueUpdateCpf(mask(data.cpf, ["999.999.999-99"]));
    setEmployeeToUpdate(data);
  };

  return (
    <EmployeeContext.Provider
      value={{
        modalIsOpen,
        setModalIsOpen,
        employeeToDelete,
        setEmployeeToDelete,
        employeeToUpdate,
        setEmployeeToUpdate,
        createEmployee,
        deleteEmployee,
        updateEmployee,
        valueUpdateSalary,
        openModalUpdate,
        setValueUpdateSalary,
        valueUpdateCpf,
        setValueUpdateCpf,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

interface isd {
  valueUpdateCpf: string;
  setValueUpdateCpf: React.Dispatch<React.SetStateAction<string>>;
}
