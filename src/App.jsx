import React from 'react'
import AppRoutes from './components/routes/AppRoutes'
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from '@chakra-ui/react';



const App = () => {
  return (
    <NextUIProvider>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </NextUIProvider>
  )
}

export default App