import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { CanvasProvider } from './context/ContextCanvas';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import MainRoutes from './utils/routes/MainRoutes';
import './App.css'

function App() {
  return (
    <CanvasProvider>
      <ChakraProvider theme={theme}>
        <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
          <MainRoutes />
        </ThirdwebProvider>
      </ChakraProvider>
    </CanvasProvider>
  );
}

export default App;
