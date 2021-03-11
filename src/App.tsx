// Dependencies
import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import Routes from './routes';

// hooks
import { useTheme } from './hooks/theme';

// Style Global
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
    const {theme} = useTheme();
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Routes /> 
            </ThemeProvider>
        
        </>
    );
}

export default App;
