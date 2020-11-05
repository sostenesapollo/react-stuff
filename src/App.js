import React, { useContext, useState } from 'react'
import Contador from './components/Contador'
import Upper from './components/Upper'
import CountProvider from './context/Count'
import ContadorMaximo from './components/ContadorMaximo'
import LoopTest from './components/LoopTest'

function App() {    
  return (
    <CountProvider>      
      <Upper/>
      <hr/>
      <Contador/>      
      <hr/>      
      <ContadorMaximo/>
      <hr/>
      <LoopTest/>
    </CountProvider>
  )
}

export default App;