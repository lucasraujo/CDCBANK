import { useContext, useState } from "react";
import { StyledModalExclude } from "./style";
import { EmployeeContext } from "../../contexts/EmployeeContext";

export const ModalExclude = () => {
  const { deleteEmployee, employeeToDelete, setEmployeeToDelete } =
    useContext(EmployeeContext);

  return (
    <StyledModalExclude>
      {employeeToDelete != null && (
        <div className="back">
          <div className="modal">
            <div className="divHeaderModal">
              <h2>Deletar Colaborador</h2>
              <button onClick={() => setEmployeeToDelete(null)}>x</button>
            </div>
            <div className="divContentModal">
              <p>
                Deseja realmente deletar esse colaborador{" "}
                {employeeToDelete!.name}?
              </p>
            </div>
            <div className="divfooterModal">
              <button
                className="buttonComfirm"
                onClick={() => deleteEmployee(employeeToDelete!.id)}
              >
                Confirmar
              </button>
              <button
                className="buttonCancel"
                onClick={() => setEmployeeToDelete(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </StyledModalExclude>
  );
};
