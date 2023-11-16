export interface iDashboardProvider {
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

export interface iDashboardTypes{
    company: iCompany;
    setCompany: React.Dispatch<React.SetStateAction<iCompany>>;
    getOneCompany: ()=> Promise<void>;
    buttonExitHandler: ()=> void;
    reload: boolean
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
    deleteEmployee: (id:number)=>Promise<void>;
   
}