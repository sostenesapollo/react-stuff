import React, { useState } from 'react'

function App() {  
  return (
    <>      
      <Upper/>
      <Contador start={20}/>
    </>
  )
}

function Upper() {

  function UpperCase(props) {
    return props.text.toUpperCase()
  }

  function UpperCaseContent(props) {
    return props.children.toUpperCase()
  }

  return (
    <>
      <h1>My app test</h1>
      <p>
        <UpperCase text="Texto que ficará em caixa alta"/>    
      </p>
      <p>
        <UpperCaseContent>Conteúdo que está dentro da div</UpperCaseContent>
      </p>
    </>
  )

}

function Contador(props) {

  const [contador, setContador] = useState(props.start ? props.start : 0)

  function IncrementaContador() {
    setContador(contador+1)
  }

  return (
    <>
      <p>{contador}</p>
      <button onClick={IncrementaContador}>Incrementar</button>
    </>
  )  
}

export default App;