import React from 'react';
import { useTheme } from '../../context/ThemeProvider'

function Container({children}) {
    const { theme, setTheme } = useTheme()
    return <div style={{
        background: theme.colors.background,
        color: theme.colors.text
    }}>{children}</div>    
}

export default Container;