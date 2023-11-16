import { useContext } from "react"
import { StyledTableOfEmployee } from "./style"
import { DashboardContext } from "../../contexts/dashboardContext"
import { maskCpf } from "../../hooks/cpf"
import { maskDate } from "../../hooks/date"
import { maskMoney } from "../../hooks/money"
import { ModalExclude } from "../ModalExclude"
import { ModalUpadate } from "../ModalUpdate"

export const TableOfEmployee = ()=>{ 

    const {company} = useContext(DashboardContext)


    return(
        <StyledTableOfEmployee>
            <table>
                <tr className="trTitle">
                    <td>CPF</td>
                    <td>Name</td>
                    <td>Nascimento</td>
                    <td>Salário</td>
                    <td>Ações</td>
                </tr>

                {
                    company.employees?.map((elem)=>
                    <tr className="trValue" key={elem.id} id={elem.id.toString()}>
                        <td>{maskCpf(elem.cpf)}</td>
                        <td>{elem.name}</td>
                        <td>{maskDate(elem.birthdate)}</td>
                        <td>{maskMoney(elem.salary)}</td>
                    <td className="tdButtons">
                            <ModalUpadate elem={elem} key={elem.id}/>
                            <ModalExclude elem={elem} />

                    </td>
                </tr>)
                }
            </table>

            
        </StyledTableOfEmployee>
    )

}