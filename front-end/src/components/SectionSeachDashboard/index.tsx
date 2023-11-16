import { ModalRegister } from "../ModalRegister"
import { StyledSectionSeachDashboard } from "./style"

export const SectionSeachDashboard = () => { 

    return(
        <StyledSectionSeachDashboard>

            <div className="divInputButton">
                <input type="text" placeholder="Pesquisa" className="inputSeach" />
                <button className="searchButton">Buscar</button>
            </div>

            <ModalRegister/>

        </StyledSectionSeachDashboard>
    )
}