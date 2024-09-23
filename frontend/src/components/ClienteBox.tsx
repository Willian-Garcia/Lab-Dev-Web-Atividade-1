import React from "react";
import { BoxContainer, DeleteButton, InfoText, InfoTitle, UpdateButton, IconContainer } from "../styles/ClienteBoxStyles";
import { Cliente } from "../types";
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const ClienteBox: React.FC<Cliente> = ({
  nome,
  email,
  idade,
  fone,
  status,
  onDelete,
  onEdit
}) => {
  return (
    <BoxContainer>
      <IconContainer>
        <UpdateButton onClick={onEdit}>
          <FaEdit />
        </UpdateButton>
        <DeleteButton onClick={onDelete}>
          <FaTrashAlt />
        </DeleteButton>
      </IconContainer>
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
