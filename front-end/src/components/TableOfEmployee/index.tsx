import { useContext, useEffect } from "react";
import { StyledTableOfEmployee } from "./style";
import { DashboardContext } from "../../contexts/dashboardContext";
import { FilterContext } from "../../contexts/filterContext/intdex";
import { TableContent } from "../tableContent";
import { createPortal } from "react-dom";
import { ModalExclude } from "../ModalExclude";
import { ModalUpdate } from "../ModalUpdate";

export const TableOfEmployee = () => {
  const { company, getOneCompany } = useContext(DashboardContext);

  const { fil } = useContext(FilterContext);
  useEffect(() => {
    getOneCompany();
  }, [company]);

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