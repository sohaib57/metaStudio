import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { CanvasProvider } from './context/ContextCanvas';
import MainRoutes from './utils/routes/MainRoutes';
import './App.css'
import { WalletConnectCanvas } from './context/WalletConnectCanvas';

function App() {
  return (
    <WalletConnectCanvas>
      <CanvasProvider>
        <ChakraProvider theme={theme}>
          <MainRoutes />
        </ChakraProvider>
      </CanvasProvider>
    </WalletConnectCanvas>
  );
}

export default App;
