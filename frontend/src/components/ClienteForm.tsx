import React, { useEffect, useState } from "react";
import {
  StyledFormContainer,
  StyledForm,
  StyledFormGroup,
  StyledLabel,
  StyledTitle,
  ClientsList,
  ButtonContainer,
} from "../styles/FormStyles";
import Input from "./Input";
import Button from "./Button";
import ClienteBox from "./ClienteBox";
import { Clientes } from "../types";
import ButtonUpdate from "./ButtonUpdate";

const ClienteForm: React.FC = () => {
  const [clientes, setClientes] = useState<Clientes[]>([]);
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [idade, setIdade] = useState<number | undefined>(undefined);
  const [fone, setFone] = useState<string>("");
  const [clienteId, setClienteId] = useState<string | null>(null);

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

  const handleUpdate = async () => {
    if (clienteId && nome && email) {
      const clienteAtualizado = { nome, email, idade, fone };

      try {
        const response = await fetch(`http://localhost:3001/cliente/${clienteId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(clienteAtualizado),
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message || "Erro ao atualizar cliente");
        }

        const clienteAtualizadoResponse = await response.json();
        setClientes(clientes.map(cliente =>
          cliente._id === clienteId ? clienteAtualizadoResponse : cliente
        ));
        resetForm();
        setClienteId(null);
      } catch (error) {
        console.error("Erro ao atualizar cliente:", error);
      }
    }
  };

  const resetForm = () => {
    setNome("");
    setEmail("");
    setIdade(undefined);
    setFone("");
    setClienteId(null);
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
            maxLength={11} // Restringindo a 11 caracteres
          />
        </StyledFormGroup>

        <ButtonContainer>
          <Button type="submit">Cadastrar</Button>
          <ButtonUpdate
            type="button"
            onClick={handleUpdate} // Atualização do cliente
            disabled={!clienteId} // Desabilita o botão se nenhum cliente estiver selecionado para edição
          >
            Atualizar
          </ButtonUpdate>
        </ButtonContainer>

        <ClientsList>
          {clientes.map((cliente) => ( // Limitar a dois clientes
            <ClienteBox
              key={cliente._id}
              nome={cliente.nome}
              email={cliente.email}
              idade={cliente.idade}
              fone={cliente.fone}
              status={cliente.status}
              onDelete={() => handleDelete(cliente._id)}
              onEdit={() => {
                setNome(cliente.nome);
                setEmail(cliente.email);
                setIdade(cliente.idade);
                setFone(cliente.fone);
                setClienteId(cliente._id);
              }}
            />
          ))}
        </ClientsList>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default ClienteForm;
