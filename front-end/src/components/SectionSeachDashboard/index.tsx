import { MouseEventHandler, useContext, useState } from "react";
import { ModalRegister } from "../ModalRegister";
import { StyledSectionSeachDashboard } from "./style";
import { FilterContext } from "../../contexts/FilterContext/intdex";

export const SectionSeachDashboard = () => {
  const { setFil, inputValue, setInputValue } = useContext(FilterContext);

  const filterClickFunction = () => {
    setFil(inputValue);

    setInputValue("");
  };

  return (
    <StyledSectionSeachDashboard>
      <div className="divInputButton">
        <input
          type="text"
          placeholder="Pesquisa"
          className="inputSeach"
          value={inputValue}
          onChange={(ev) => setInputValue(ev.target.value)}
        />
        <button
          className="searchButton"
          type="button"
          onClick={() => filterClickFunction()}
        >
          Buscar
        </button>
      </div>

      <ModalRegister />
    </StyledSectionSeachDashboard>
  );
};
