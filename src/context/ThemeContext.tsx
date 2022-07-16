import { AppBarPropsColorOverrides, PropTypes } from "@mui/material";
import { createContext, ReactNode, useState} from "react";
import { OverridableStringUnion } from '@mui/types';

interface ThemeType {
    theme: OverridableStringUnion<PropTypes.Color | 'transparent', AppBarPropsColorOverrides>,
    toggleTheme: () => void
}

interface ThemeProps {
    children: ReactNode,
}

const initialTheme = {
    theme: 'secondary' as OverridableStringUnion<PropTypes.Color | 'transparent', AppBarPropsColorOverrides>,
    toggleTheme: () => {}
}

export const ThemeContext = createContext<ThemeType>(initialTheme)

const ContextProvier = ({children}: ThemeProps) => {
    const [theme, setTheme] = useState<OverridableStringUnion<PropTypes.Color | 'transparent', AppBarPropsColorOverrides>>(initialTheme.theme)
    const toggleTheme = () => {
        setTheme(theme === 'primary' ? 'secondary' : 'primary')
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}

export default ContextProvier