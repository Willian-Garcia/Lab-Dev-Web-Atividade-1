import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import ClienteForm from './components/ClienteForm';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ClienteForm />
    </>
  );
};

export default App;
