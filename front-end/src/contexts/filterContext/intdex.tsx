import { createContext, useState } from "react";
import { iFilterProvider, iFilterTypes } from "./types";

export const FilterContext = createContext({} as iFilterTypes);

export const FilterProvider = ({ children }: iFilterProvider) => {
  const [fil, setFil] = useState("" as string);
  const [inputValue, setInputValue] = useState("" as string);
  return (
    <FilterContext.Provider value={{ fil, setFil, inputValue, setInputValue }}>
      {children}
    </FilterContext.Provider>
  );
};
