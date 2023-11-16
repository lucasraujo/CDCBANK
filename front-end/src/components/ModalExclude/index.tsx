import { useContext, useState } from "react";
import { StyledModalExclude } from "./style"
import { DashboardContext } from "../../contexts/dashboardContext";


export const ModalExclude = ({elem}:any) => { // voltar aqui

const [modalIsOpen, setIsOpen] = useState(false)

const {deleteEmployee} = useContext(DashboardContext)

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
    
  }


    return(
        <StyledModalExclude >
        <button className="buttonExclude" onClick={openModal}>Excluir</button>
      { modalIsOpen&&
        <div className="back" >
              <div className="modal" >
                <div className="divHeaderModal">
                  <h2>Deletar Colaborador</h2>
                  <button onClick={closeModal}>x</button>

                </div>
                <div className="divContentModal">
                  <p>
                    Deseja realmente deletar esse colaborador {elem.name}?
                  </p>

                </div>
                <div className="divfooterModal">

                  <button className="buttonComfirm" onClick={()=>deleteEmployee(elem.id)}>Confirmar</button>
                  <button className="buttonCancel" onClick={closeModal}>Cancelar</button>

                </div>


              </div>

        </div>
        }

        </StyledModalExclude>
    )
}