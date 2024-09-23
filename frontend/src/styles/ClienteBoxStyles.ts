import styled from 'styled-components';

export const BoxContainer = styled.div`
  background-color: white;
  width: 100%;
  height: auto;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f24f45;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;

export const InfoText = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #131b25;
`;

export const InfoTitle = styled.span`
  font-weight: bold;
  color: #131b25;
`;
