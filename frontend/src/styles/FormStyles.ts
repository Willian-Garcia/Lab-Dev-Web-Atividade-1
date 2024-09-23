import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #3a424d;
  margin-Top: 10px;
  margin-Bottom: 10px;
`;

export const StyledForm = styled.form`
  width: 650px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #131b25;
`;

export const StyledTitle = styled.h1`
  display: block;
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: bold;
  color: #e2e2e2;
  font-family: Arial, Helvetica, sans-serif;
`;

export const StyledFormGroup = styled.div`
  margin-bottom: 15px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #e2e2e2;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ClientsList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 350px;
  overflow-y: auto;
  padding: 10px;
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;