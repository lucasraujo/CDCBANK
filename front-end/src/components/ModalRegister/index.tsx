import { useContext, useState } from "react";
import { StyledModalRegister } from "./style";
import { mask, unMask, currency } from "remask";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EmployeeContext } from "../../contexts/EmployeeContext";
import { DashboardContext } from "../../contexts/DashboardContext";
import { employeeSchema, tEmployee } from "./schema";

export const ModalRegister = () => {
  const { createEmployee, modalIsOpen, setModalIsOpen } =
    useContext(EmployeeContext);
  const { company } = useContext(DashboardContext);

  const [CPF, setCPF] = useState("");
  const [salary, setSalary] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tEmployee>({
    resolver: zodResolver(employeeSchema),
  });

  const submit = async (formData: tEmployee) => {
    const newFormData = {
      ...formData,
      cpf: unMask(formData.cpf),
      salary: +currency.unmask({
        locale: "pt-BR",
        currency: "BRL",
        value: formData.salary,
      }),
    };
    createEmployee(newFormData, company);
    setModalIsOpen(false);
  };

  const onChangeCPF = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCPF(mask(unMask(ev.target.value), ["999.999.999-99"]));
  };

  const onChangeSalary = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(
      currency.mask({
        locale: "pt-BR",
        currency: "BRL",
        value: currency.unmask({
          locale: "pt-BR",
          currency: "BRL",
          value: ev.target.value,
        }),
      })
    );
  };

  return (
    <StyledModalRegister>
      <button onClick={() => setModalIsOpen(true)} className="createButton">
        Cadastrar
      </button>
      {modalIsOpen && (
        <div className="back">
          <div className="modal">
            <div className="divHeaderModal">
              <h2>Cadastrar Colaborador</h2>
              <button onClick={() => setModalIsOpen(false)}>x</button>
            </div>

            <form onSubmit={handleSubmit(submit)}>
              <div className="divContentModal">
                <div className="divLabel">
                  <label htmlFor="CPF">CPF:</label>
                  <div className="divInputAndErro">
                    <input
                      type="text"
                      id="CPF"
                      {...register("cpf")}
                      onChange={onChangeCPF}
                      value={CPF}
                    />
                    {errors.cpf && (
                      <span className="spanError">
                        {errors.cpf.message?.toString()}
                      </span>
                    )}
                  </div>
                </div>
                <div className="divLabel">
                  <label htmlFor="Nome">Nome:</label>
                  <div className="divInputAndErro">
                    <input type="text" id="Nome" {...register("name")} />
                    {errors.name && (
                      <span className="spanError">
                        {errors.name.message?.toString()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="divLabel">
                  <label htmlFor="Nascimento">Nascimento:</label>
                  <div className="divInputAndErro">
                    <input
                      type="date"
                      id="Nascimento"
                      {...register("birthdate")}
                    />
                    {errors.birthdate && (
                      <span className="spanError">
                        {errors.birthdate.message?.toString()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="divLabel">
                  <label htmlFor="Salario">Salário:</label>
                  <div className="divInputAndErro">
                    <input
                      type="text"
                      id="Salario"
                      {...register("salary")}
                      onChange={onChangeSalary}
                      value={salary}
                    />
                    {errors.salary && (
                      <span className="spanError">
                        {errors.salary.message?.toString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="divfooterModal">
                <button className="buttonComfirm" type="submit">
                  Confirmar
                </button>
                <button
                  className="buttonCancel"
                  onClick={() => setModalIsOpen(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </StyledModalRegister>
  );
};
