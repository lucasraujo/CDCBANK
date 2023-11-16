import { useContext } from "react";
import { StyledModalRegister } from "./style";
import { CreateUpdateEmployeeContext } from "../../contexts/createUpdateEmployeeContext";



export const ModalRegister = () =>{

const {modalIsOpen, value, salary, openModal,closeModal,functionOfHandleSubmit,
    onChangeCPF,onChangeSalary,register,handleSubmit, errors} = useContext( CreateUpdateEmployeeContext)



    return(
        <StyledModalRegister>
        <button  onClick={openModal} className="createButton">Cadastrar</button>
            { modalIsOpen&&
                <div className="back" >
                    <div className="modal" >
                        <div className="divHeaderModal">
                        <h2>Cadastrar Colaborador</h2>
                        <button onClick={closeModal}>x</button>
                        </div>

                        <form onSubmit={handleSubmit(functionOfHandleSubmit)}>
                            <div className="divContentModal">
                            <div className="divLabel">
                                <label htmlFor="CPF">CPF:</label>
                                    <div className="divInputAndErro">
                                        <input type="text" id="CPF" {...register("cpf")} onChange={onChangeCPF} value={value}/>
                                        {errors.cpf&& (<span className="spanError">{errors.cpf.message?.toString()}</span>)}
                                    </div>      

                                </div>
                                <div className="divLabel">
                                <label htmlFor="Nome">Nome:</label>
                                    <div className="divInputAndErro">
                                        <input type="text" id="Nome" {...register("name")} />
                                        {errors.name&& (<span className="spanError">{errors.name.message?.toString()}</span>)}
                                    </div>      

                                </div>

                                <div className="divLabel">
                                <label htmlFor="Nascimento">Nascimento:</label>
                                    <div className="divInputAndErro">
                                        <input type="date" id="Nascimento" {...register("birthdate")} />
                                        {errors.date&& (<span className="spanError">{errors.date.message?.toString()}</span>)}

                                    </div>      
                                </div>

                                <div className="divLabel">
                                <label htmlFor="Salario">Salário:</label>
                                    <div className="divInputAndErro">
                                        <input type="text" id="Salario" {...register("salary")} onChange={onChangeSalary} value={salary}/>
                                        {errors.salary&& (<span className="spanError">{errors.salary.message?.toString()}</span>)}
                                    </div>      

                                </div>
                            
                            </div>

                            <div className="divfooterModal">
                                <button className="buttonComfirm" type="submit" >Confirmar</button>
                                <button className="buttonCancel" onClick={closeModal}>Cancelar</button>
                            </div>

                        </form>


                    </div>

                </div>
        }

        </StyledModalRegister>
    )
}