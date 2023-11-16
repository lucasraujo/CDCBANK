import { useContext, useEffect, useState } from "react"
import { StyledModalUpdate } from "./style"
import { CreateUpdateEmployeeContext } from "../../contexts/createUpdateEmployeeContext"
import { currency, mask, unMask } from "remask"
import { DashboardContext } from "../../contexts/dashboardContext"
import { iCompany } from "../../contexts/loginContext/types"
import api from "../../services/api"

export const ModalUpadate = ({elem}:any) =>{

    const {register,handleSubmit, errors} = useContext( CreateUpdateEmployeeContext)

    const { reload, setReload,  } = useContext(DashboardContext)
        
    const [modalUpdateIsOpen, setUpdateIsOpen] = useState(false as boolean)
    const [element, setElement] = useState({} as any)
    const [valueUpdateCpf, setValueUpdateCpf] = useState(mask(elem.cpf, ["999.999.999-99"] )as string)
    const [valueUpdateSalary, setValueUpdateSalary] = useState( currency.mask({ locale: 'pt-BR', currency: 'BRL', value:elem.salary.toString()}) as string)

    
    const openModalUpdate=(elem:any)=> {

        setUpdateIsOpen(true)
    }

    const updateEmployee = async (data: any) =>{

        try {
            await api.patch(`/employee/${elem.id}`, data)
            setReload(!reload)
        } catch (error) {
            
        }
    }

    const functionOfHandleSubmit = async(formDate:any ) => {
        formDate.cpf = unMask(formDate.cpf)
        formDate.salary = currency.unmask({ locale: 'pt-BR', currency: 'BRL', value: formDate.salary})
        updateEmployee(formDate)
        closeModalUpdate()

    }

    
    
    const closeModalUpdate= async ()=> {
        window.location.reload()
        await setReload(!reload)
        setUpdateIsOpen(false);  
    }

        
    const onChangeCPFUpdate = (ev:any)=>{
        setValueUpdateCpf(mask(unMask(ev.target.value), ["999.999.999-99"]))
    }    

    
    const onChangeSalaryUpdate = (ev:any)=>{

        setValueUpdateSalary(currency.mask({ locale: 'pt-BR', currency: 'BRL', value: currency.unmask({ locale: 'pt-BR', currency: 'BRL', value: ev.target.value })}))
    }
    
    
        return(
            <StyledModalUpdate>
            <button  onClick={()=>openModalUpdate(elem)} className="buttonEdit">Editar</button>
                { modalUpdateIsOpen&&
                    <div className="back2" >
                        <div className="modal" >
                            <div className="divHeaderModal">
                            <h2>Editar Colaborador</h2>
                            <button onClick={closeModalUpdate}>x</button>
                            </div>
    
                            <form onSubmit={handleSubmit(functionOfHandleSubmit)}>
                                <div className="divContentModal">
                                <div className="divLabel">
                                    <label htmlFor="CPF">CPF:</label>
                                        <div className="divInputAndErro">
                                            <input type="text" id="CPF" {...register("cpf")} onChange={onChangeCPFUpdate} value={valueUpdateCpf} />
                                            {errors.cpf&& (<span className="spanError">{errors.cpf.message?.toString()}</span>)}
                                        </div>      
    
                                    </div>
                                    <div className="divLabel">
                                    <label htmlFor="Nome">Nome:</label>
                                        <div className="divInputAndErro">
                                            <input type="text" id="Nome" {...register("name")} defaultValue={elem.name}/>
                                            {errors.name&& (<span className="spanError">{errors.name.message?.toString()}</span>)}
                                        </div>      
    
                                    </div>
    
                                    <div className="divLabel">
                                    <label htmlFor="Nascimento">Nascimento:</label>
                                        <div className="divInputAndErro">
                                            <input type="date" id="Nascimento" {...register("birthdate")} defaultValue={elem.birthdate}/>
                                            {errors.date&& (<span className="spanError">{errors.date.message?.toString()}</span>)}
    
                                        </div>      
                                    </div>
    
                                    <div className="divLabel">
                                    <label htmlFor="Salario">Salário:</label>
                                        <div className="divInputAndErro">
                                            <input type="text" id="Salario" {...register("salary")} onChange={onChangeSalaryUpdate} value={valueUpdateSalary}/>
                                            {errors.salary&& (<span className="spanError">{errors.salary.message?.toString()}</span>)}
                                        </div>      
    
                                    </div>
                                
                                </div>
    
                                <div className="divfooterModal">
                                    <button className="buttonComfirm" type="submit" >Confirmar</button>
                                    <button className="buttonCancel" onClick={closeModalUpdate}>Cancelar</button>
                                </div>
    
                            </form>
    
    
                        </div>
    
                    </div>
            }
    
            </StyledModalUpdate>
        )
    }