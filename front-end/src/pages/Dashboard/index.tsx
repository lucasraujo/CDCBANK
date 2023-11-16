import { HeaderDashboard } from "../../components/HeaderDashboard"
import { SectionSeachDashboard } from "../../components/SectionSeachDashboard"
import { TableOfEmployee } from "../../components/TableOfEmployee"
import { StyledDashboard } from "./style"

export const Dashboard = () =>{

    return(
        <StyledDashboard>
            <HeaderDashboard/>
            <SectionSeachDashboard/> 
            <TableOfEmployee/>

        </StyledDashboard>
    )
}