export interface iFilterProvider {
  children: React.ReactNode;
}

export interface iFilterTypes {
  fil: string;
  setFil: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
