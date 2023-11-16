import { createContext, useState } from "react";
import { iCompany, iDashboardProvider, iDashboardTypes } from "./types";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export const DashboardContext = createContext({} as iDashboardTypes)

export const DashboardProvider = ({children}: iDashboardProvider) => {

    const navigate = useNavigate()
    const [company, setCompany] = useState({} as iCompany)
    const [reload, setReload] = useState(true as boolean)
    
    const getOneCompany = async () => { 

        const companyLogedId = localStorage.getItem("CompanyId")
        if(companyLogedId){
            try {
                const response = await api.get(`/company/${companyLogedId}`)
                setCompany(response.data)
            } catch (error) {
                console.error(error)
            }
        }
    }

    const deleteEmployee = async (id:number) => {

        try {
            await api.delete(`/employee/${id}`)
            setReload(!reload)
        } catch (error) {
            console.error(error)
        }
    }



    const buttonExitHandler = () => {
        localStorage.removeItem("CompanyId")
        navigate("/")
    }


    return (
        <DashboardContext.Provider value={{company, setCompany, getOneCompany, buttonExitHandler,reload, setReload, deleteEmployee}}>
            {children}
        </DashboardContext.Provider>
    )
}