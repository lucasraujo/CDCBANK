

export interface iLoginProvider {
    children: React.ReactNode;
}

export interface iEmployee {
    id: number;
    name: string;
    cpf: string;
    birthdate: string;
    salary: number;
}

export interface iCompany {
    id: number;
    name: string;
    employees: iEmployee[];
}

export interface iLoginTypes {
    getAllCompanies: ()=> void;
    allCompanies: iCompany[];
    setAllCompanies:  React.Dispatch<React.SetStateAction<iCompany[]>>;
    handleButton: ()=> void;
    setSelectValue: React.Dispatch<React.SetStateAction<string>>;
    selectValue: string;
}