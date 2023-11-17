import { iCompany } from "../../types";

export interface iDashboardProvider {
  children: React.ReactNode;
}

export interface iDashboardTypes {
  company: iCompany;
  setCompany: React.Dispatch<React.SetStateAction<iCompany>>;
  getOneCompany: () => Promise<void>;
  buttonExitHandler: () => void;
  reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}
