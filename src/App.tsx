// Dependencies
import React from 'react';

// Components
import Dashboard from './pages/Dashboard';

// Style Global
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
    return (
        <>
        <GlobalStyles />
        <Dashboard />
        </>
    );
}

export default App;
