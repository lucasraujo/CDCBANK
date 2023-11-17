import { iLoginProvider, iLoginTypes } from "./types";
import api from "../../services/api";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iCompany } from "../../types";

export const LoginContext = createContext({} as iLoginTypes);

export const LoginProvider = ({ children }: iLoginProvider) => {
  const [allCompanies, setAllCompanies] = useState([] as iCompany[]);

  const [selectValue, setSelectValue] = useState("" as string);

  const navigate = useNavigate();

  const handleButton = () => {
    if (selectValue !== "") {
      localStorage.setItem("CompanyId", selectValue);
      navigate("/Dashboard");
    }
  };

  const getAllCompanies = async () => {
    try {
      const response = await api.get("/company");
      setAllCompanies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        getAllCompanies,
        allCompanies,
        setAllCompanies,
        selectValue,
        setSelectValue,
        handleButton,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
