import React, { useEffect, useState } from "react";
import {StyledFormContainer, StyledForm, StyledFormGroup, StyledLabel, StyledTitle, ClientsList,} from "../styles/FormStyles";
import Input from "./Input";
import Button from "./Button";
import ClienteBox from "./ClienteBox";
import { Clientes } from "../types";

const ClienteForm: React.FC = () => {
  const [clientes, setClientes] = useState<Clientes[]>([]);
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [idade, setIdade] = useState<number | undefined>(undefined);
  const [fone, setFone] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (nome && email && idade !== undefined && fone) {
      const novoCliente = { nome, email, idade, fone, status: "Ativo" };
      try {
        const response = await fetch("http://localhost:3001/cliente", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(novoCliente),
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message || "Erro ao cadastrar cliente");
        }

        const clienteCadastrado = await response.json();
        setClientes((prev) => [...prev, clienteCadastrado]);
        resetForm();
      } catch (error) {
        console.error("Erro ao cadastrar cliente:", error);
      }
    }
  };

  const resetForm = () => {
    setNome("");
    setEmail("");
    setIdade(undefined);
    setFone("");
  };

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch("http://localhost:3001/cliente");
        const clienteList: Clientes[] = await response.json();
        setClientes(clienteList);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchClientes();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3001/cliente/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar cliente");
      }

      const novosClientes = clientes.filter(cliente => cliente._id !== id);
      setClientes(novosClientes);
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
    }
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle>Clientes</StyledTitle>

        <StyledFormGroup>
          <StyledLabel htmlFor="nome">Nome:</StyledLabel>
          <Input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </StyledFormGroup>

        <StyledFormGroup>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </StyledFormGroup>

        <StyledFormGroup>
          <StyledLabel htmlFor="idade">Idade:</StyledLabel>
          <Input
            type="number"
            id="idade"
            name="idade"
            value={idade !== undefined ? String(idade) : ""}
            onChange={(e) => setIdade(Number(e.target.value))}
            required
          />
        </StyledFormGroup>

        <StyledFormGroup>
          <StyledLabel htmlFor="fone">Telefone:</StyledLabel>
          <Input
            type="tel"
            id="fone"
            name="fone"
            value={fone}
            onChange={(e) => setFone(e.target.value)}
            required
          />
        </StyledFormGroup>

        <Button type="submit">Cadastrar</Button>

        <ClientsList>
        {clientes.map((cliente) => (
          <ClienteBox
            key={cliente._id}
            nome={cliente.nome}
            email={cliente.email}
            idade={cliente.idade}
            fone={cliente.fone}
            status={cliente.status}
            onDelete={() => handleDelete(cliente._id)}
          />
        ))}
      </ClientsList>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default ClienteForm;
