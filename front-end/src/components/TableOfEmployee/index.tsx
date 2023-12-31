import { useContext, useEffect } from "react";
import { StyledTableOfEmployee } from "./style";
import { DashboardContext } from "../../contexts/DashboardContext";
import { FilterContext } from "../../contexts/FilterContext";
import { TableContent } from "../TableContent";
import { createPortal } from "react-dom";
import { ModalExclude } from "../ModalExclude";
import { ModalUpdate } from "../ModalUpdate";
import { EmployeeContext } from "../../contexts/EmployeeContext";

export const TableOfEmployee = () => {
  const { company, getOneCompany, reload } = useContext(DashboardContext);
  const { employeeToUpdate } = useContext(EmployeeContext);

  const { fil } = useContext(FilterContext);
  useEffect(() => {
    getOneCompany();
  }, [employeeToUpdate]);

  const employees = company.employees?.filter((emp) =>
    emp.name.toLowerCase().includes(fil.toLowerCase())
  );

  return (
    <StyledTableOfEmployee>
      <table>
        <tr className="trTitle">
          <td>CPF</td>
          <td>Name</td>
          <td>Nascimento</td>
          <td>Salário</td>
          <td>Ações</td>
        </tr>

        {employees?.map((employee) => (
          <TableContent employee={employee} key={employee.id} />
        ))}
      </table>
      {createPortal(<ModalUpdate />, document.body)}
      {createPortal(<ModalExclude />, document.body)}
    </StyledTableOfEmployee>
  );
};
