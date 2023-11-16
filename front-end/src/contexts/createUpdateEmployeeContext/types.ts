import {UseFormRegister, FieldValues, UseFormHandleSubmit, FieldErrors} from "react-hook-form/dist/types"

export interface iCreateEmployeeProvider {
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

export interface iCreateEmployeeTypes{

    modalIsOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    value:string;
    setValue:React.Dispatch<React.SetStateAction<string>>;
    salary:string;
    setSalary:React.Dispatch<React.SetStateAction<string>>;
    openModal: ()=> void;
    closeModal:  ()=> void;
    functionOfHandleSubmit: (formDate: any)=> void;
    createEmployee: (data:any, company:iCompany)=> Promise<void>;
    onChangeCPF: (ev:any)=> void;
    onChangeSalary : (ev:any)=> void;
    register: UseFormRegister<FieldValues> ; 
    handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
    errors: FieldErrors<FieldValues>;



}

