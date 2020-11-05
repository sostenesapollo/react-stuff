import React, { useContext, useState } from 'react'
import Contador from './components/Contador'
import Upper from './components/Upper'
import ContadorMaximo from './components/ContadorMaximo'
import LoopTest from './components/LoopTest'
import Container from './components/Container'
import ChangeTheme from './components/ChangeTheme'
import CountProvider from './context/Count'
import ThemeProvider from './context/ThemeProvider'

function App() {    
return (
    <ThemeProvider>
      <CountProvider>
        <Container>
          <Upper/>
          <hr/>
          <Contador/>      
          <hr/>      
          <ContadorMaximo/>
          <hr/>
          <LoopTest/>
          <hr/>
          <ChangeTheme/>
        </Container>
      </CountProvider>
    </ThemeProvider>
  )
}

export default App;