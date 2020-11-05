import React, {createContext} from 'react'
import {useCount} from '../../context/Count'

const ContadorMaximo = () => {

    const { count } = useCount();

    return (
        <div>
            Count: {count}
        </div>
    )
}

export default ContadorMaximo
