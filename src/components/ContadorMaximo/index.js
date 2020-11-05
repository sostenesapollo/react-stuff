import React, {createContext} from 'react'
import {useCount} from '../../context/Count'
import { useTheme, themes } from '../../context/ThemeProvider'

const ContadorMaximo = () => {

    const { count } = useCount();
    const { theme, setTheme } = useTheme()

    return (
        <div>
            Count: {count}
        </div>
    )
}

export default ContadorMaximo
