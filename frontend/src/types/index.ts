export interface ButtonProps {
  type: "submit" | "button";
  children: React.ReactNode;
}

export interface Cliente {
  nome: string;
  email: string;
  idade: number;
  fone: string;
  status: string;
  onDelete: () => void;
}

export interface InputProps {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

export interface Clientes {
    _id: string;
    nome: string;
    email: string;
    idade: number;
    fone: string;
    status: string;
  }