import { createContext, useContext, useState,  } from "react";
import { iCompany, iCreateEmployeeProvider, iCreateEmployeeTypes } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { currency, mask, unMask } from "remask";
import api from "../../services/api";
import { z } from "zod";
import { DashboardContext } from "../dashboardContext";
import { useForm } from "react-hook-form"

export const CreateUpdateEmployeeContext = createContext({} as iCreateEmployeeTypes)

export const CreateUpdateEmployeeProvider = ({children}: iCreateEmployeeProvider) => {

    const [modalIsOpen, setIsOpen] = useState(false as boolean)

    const [value, setValue] = useState("" as string)
    const [salary, setSalary] = useState("" as string)
    const { reload, setReload, company } = useContext(DashboardContext )

    const openModal=()=> {
        setIsOpen(true);
    }
    
    const closeModal=()=> {
        setIsOpen(false);  
    }
    

    const employeeSchema = z.object({
        cpf: z.string().nonempty("este campo e obrigatorio").min(14,"Voce esqueceu algum digito"),
        name: z.string().max(120).nonempty("este campo e obrigatorio"),
        birthdate: z.string().nonempty("este campo e obrigatorio"),
        salary: z.string().nonempty("este campo e obrigatorio")
    })

    type IemployeeRequest = z.infer<typeof employeeSchema>

    const {register , handleSubmit, formState: { errors } } = useForm({
        resolver:zodResolver(employeeSchema)
    })

    const functionOfHandleSubmit = async(formDate:any ) => {
        formDate.cpf = unMask(formDate.cpf)
        formDate.salary = currency.unmask({ locale: 'pt-BR', currency: 'BRL', value: formDate.salary})
        createEmployee(formDate, company)
        closeModal()

    }

    const createEmployee =async (data: any, company:iCompany) => {

        console.log(data)
        try {
            const response = await api.post(`/employee/${company.id}`, data)
            setReload(!reload)
        } catch (error) {
            console.log(error)
        }

    }



    const onChangeCPF = (ev:any)=>{
        setValue(mask(unMask(ev.target.value), ["999.999.999-99"]))
    }    
    
    const onChangeSalary = (ev:any)=>{

        setSalary(currency.mask({ locale: 'pt-BR', currency: 'BRL', value: currency.unmask({ locale: 'pt-BR', currency: 'BRL', value: ev.target.value })}))
    }


    return (
        <CreateUpdateEmployeeContext.Provider value={{modalIsOpen, setIsOpen, value, setValue, salary,setSalary,openModal,
        closeModal,functionOfHandleSubmit,createEmployee,onChangeCPF,onChangeSalary,register,handleSubmit, errors}}>
            {children}
        </CreateUpdateEmployeeContext.Provider>
    )
}