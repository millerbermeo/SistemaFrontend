import React from 'react'
import AppRoutes from './components/routes/AppRoutes'
import {NextUIProvider} from "@nextui-org/react";



const App = () => {
  return (
    <NextUIProvider>
    <AppRoutes />
    </NextUIProvider>
  )
}

export default App