import React from 'react';
import {themes, useTheme} from '../../context/ThemeProvider';

function ChangeTheme(props) {
    const {theme, setTheme} = useTheme()
    return (
        <div>
            <button onClick={()=>setTheme(theme.name == "dark" ? themes[1] : themes[0])}>Change theme</button>
        </div>
    );
}

export default ChangeTheme;