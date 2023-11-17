import { useContext } from "react";
import { maskCpf } from "../../hooks/cpf";
import { maskDate } from "../../hooks/date";
import { maskMoney } from "../../hooks/money";
import { StyledTableContent } from "./styled";
import { iEmployee } from "../../types";
import { EmployeeContext } from "../../contexts/EmployeeContext";

type tEmployeeProps = {
  employee: iEmployee;
};

export const TableContent = ({ employee }: tEmployeeProps) => {
  const { setEmployeeToDelete, openModalUpdate } =
    useContext(EmployeeContext);

  return (
    <StyledTableContent className="trValue">
      <td>{maskCpf(employee.cpf)}</td>
      <td>{employee.name}</td>
      <td>{maskDate(employee.birthdate)}</td>
      <td>{maskMoney(employee.salary)}</td>
      <td className="tdButtons">
        <button
          onClick={() => openModalUpdate(employee)}
          className="buttonEdit"
        >
          Editar
        </button>
        <button
          onClick={() => setEmployeeToDelete(employee)}
          className="buttonExclude"
        >
          Excluir
        </button>
      </td>
    </StyledTableContent>
  );
};
