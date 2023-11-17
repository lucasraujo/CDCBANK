import { useContext, useEffect, useState } from "react";
import { StyledModalUpdate } from "./style";

import { currency, mask, unMask } from "remask";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { employeeSchema } from "./schema";
import { EmployeeContext } from "../../contexts/EmployeeContext";
import { iEmployee } from "../../types";
import { DashboardContext } from "../../contexts/DashboardContext";

export const ModalUpdate = () => {
  const { setReload, reload } = useContext(DashboardContext);
  const {
    updateEmployee,
    employeeToUpdate,
    setEmployeeToUpdate,
    valueUpdateSalary,
    setValueUpdateSalary,
    setValueUpdateCpf,
    valueUpdateCpf,
  } = useContext(EmployeeContext);

  type TformValues = z.infer<typeof employeeSchema>;

  const closeModalUpdate = () => {
    setReload(!reload);
    setEmployeeToUpdate(null);
  };

  const onChangeCPFUpdate = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValueUpdateCpf(mask(unMask(ev.target.value), ["999.999.999-99"]));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TformValues>({
    resolver: zodResolver(employeeSchema),
    values: {
      name: employeeToUpdate?.name == null ? "" : employeeToUpdate.name,
      cpf: valueUpdateCpf,
      birthdate:
        employeeToUpdate?.birthdate == null ? "" : employeeToUpdate.birthdate,
      salary: valueUpdateSalary,
    },
  });

  const submit = async (formDate: any) => {
    formDate.cpf = unMask(formDate.cpf);
    formDate.salary = currency.unmask({
      locale: "pt-BR",
      currency: "BRL",
      value: formDate.salary.toString(),
    });
    updateEmployee(formDate);
    closeModalUpdate();
  };

  const onChangeSalaryUpdate = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValueUpdateSalary(
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
    <StyledModalUpdate>
      {employeeToUpdate != null && (
        <div className="back2">
          <div className="modal">
            <div className="divHeaderModal">
              <h2>Editar Colaborador</h2>
              <button onClick={closeModalUpdate}>x</button>
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
                      onChange={onChangeCPFUpdate}
                      value={valueUpdateCpf}
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
                      onChange={onChangeSalaryUpdate}
                      value={valueUpdateSalary}
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
                <button className="buttonCancel" onClick={closeModalUpdate}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </StyledModalUpdate>
  );
};
