import React from "react";
import { BoxContainer, DeleteButton, InfoText, InfoTitle } from "../styles/ClienteBoxStyles";
import { Cliente } from "../types";

const ClienteBox: React.FC<Cliente> = ({
  nome,
  email,
  idade,
  fone,
  status,
  onDelete,
}) => {
  return (
    <BoxContainer>
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
      <InfoText>
        <InfoTitle>Nome:</InfoTitle> {nome}
      </InfoText>
      <InfoText>
        <InfoTitle>Email:</InfoTitle> {email}
      </InfoText>
      <InfoText>
        <InfoTitle>Idade:</InfoTitle> {idade}
      </InfoText>
      <InfoText>
        <InfoTitle>Telefone:</InfoTitle> {fone}
      </InfoText>
      <InfoText>
        <InfoTitle>Status:</InfoTitle> {status}
      </InfoText>
    </BoxContainer>
  );
};

export default ClienteBox;
