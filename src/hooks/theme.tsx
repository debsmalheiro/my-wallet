// Dependencies
import React, { createContext, useState, useContext } from 'react';

// Themes
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

// Interfaces
interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
}

interface ITheme {
    title: string;
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
    }
}

// Component
const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children}) => {

    const [theme, setTheme] = useState<ITheme>(() => {
        const themeSaved = localStorage.getItem('@my-wallet:theme');

        if(themeSaved){
            return JSON.parse(themeSaved);
        } else {
            return dark;
        }
    });

    const toggleTheme = () => {
        if(theme.title === 'dark'){
            setTheme(light);
            localStorage.setItem('@my-wallet:theme', JSON.stringify(light));
        } else {
            setTheme(dark);
            localStorage.setItem('@my-wallet:theme', JSON.stringify(dark));
        }
    };

    return (
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);
    return context;
}

// Export module
export { ThemeProvider, useTheme };