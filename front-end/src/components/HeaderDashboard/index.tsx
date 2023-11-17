import { useContext, useEffect } from "react";
import { StyledHeader } from "./style";
import { DashboardContext } from "../../contexts/DashboardContext";

export const HeaderDashboard = () => {
  const { company, getOneCompany, buttonExitHandler, reload } =
    useContext(DashboardContext);

  useEffect(() => {
    getOneCompany();
  }, [reload]);

  return (
    <StyledHeader>
      <div className="divTitleAndButton">
        <div className="divTitle">
          <h1>{company.name}</h1>
        </div>

        <button className="buttonExit" onClick={() => buttonExitHandler()}>
          Sair
        </button>
      </div>
    </StyledHeader>
  );
};
