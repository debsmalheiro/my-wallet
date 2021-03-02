// Dependencies
import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import Layout from './components/Layout';

// Style Global
import GlobalStyles from './styles/GlobalStyles';

// Themes
import dark from './styles/themes/dark';

const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={dark}>
                <GlobalStyles />
                <Layout />  
            </ThemeProvider>
        
        </>
    );
}

export default App;
