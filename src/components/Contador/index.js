import React, { useState } from 'react'
import { useCount } from '../../context/Count'

const Contador = props => {
      
  const { count, setCount } = useCount();

  function IncrementaContador() {
    setCount(count+1)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={IncrementaContador}>Incrementar</button>
    </>
  )  
}

export default Contador
