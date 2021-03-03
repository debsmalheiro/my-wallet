// Dependencies
import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

// Style Global
import GlobalStyles from './styles/GlobalStyles';

// Themes
import dark from './styles/themes/dark';

const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={dark}>
                <GlobalStyles />
                <Layout>
                    <Dashboard />
                </Layout> 
            </ThemeProvider>
        
        </>
    );
}

export default App;
