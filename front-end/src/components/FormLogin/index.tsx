import { useContext, useEffect, useState } from "react";
import { StyledFormLogin } from "./style";
import { LoginContext } from "../../contexts/loginContext";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const { getAllCompanies, allCompanies, handleButton, setSelectValue } =
    useContext(LoginContext);

  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <StyledFormLogin>
      <h1>Login</h1>

      <div className="labelSelectDiv">
        <label htmlFor="selectLogin">Empresa</label>
        <select
          name="selectLogin"
          id="selectLogin"
          onChange={(ev) => setSelectValue(ev.currentTarget.value)}
        >
          <option value="">Selecione uma empresa</option>
          {allCompanies.map((elem) => (
            <option key={elem.id} value={elem.id}>
              {elem.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={() => handleButton()}>Entrar</button>
    </StyledFormLogin>
  );
};
