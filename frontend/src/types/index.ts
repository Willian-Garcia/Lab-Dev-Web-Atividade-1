export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void; // Função de clique opcional
  disabled?: boolean;   // Prop de disabled opcional
  children: React.ReactNode;
}

export interface Cliente {
  nome: string;
  email: string;
  idade: number;
  fone: string;
  status: string;
  onDelete: () => void;
  onEdit: () => void;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

  required: boolean;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Clientes {
  _id: string;
  nome: string;
  email: string;
  idade: number;
  fone: string;
  status: string;
}