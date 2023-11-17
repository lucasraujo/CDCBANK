import { iCompany } from "../../types";

export interface iLoginProvider {
  children: React.ReactNode;
}
export interface iLoginTypes {
  getAllCompanies: () => void;
  allCompanies: iCompany[];
  setAllCompanies: React.Dispatch<React.SetStateAction<iCompany[]>>;
  handleButton: () => void;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  selectValue: string;
}
