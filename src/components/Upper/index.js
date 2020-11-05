import React, { useState } from 'react'

const Upper = props => {
    function UpperCase(props) {
        return props.text.toUpperCase()
    }

    function UpperCaseContent(props) {
    return props.children.toUpperCase()
    }

    return (
    <>        
        <p>
        <UpperCase text="Texto que ficará em caixa alta"/>    
        </p>
        <p>
        <UpperCaseContent>Conteúdo que está dentro da div</UpperCaseContent>
        </p>
    </>
    )
}

export default Upper
