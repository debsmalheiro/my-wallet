// Dependencies
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import AppRoutes from './app.routes';

// Component
const Routes: React.FC = () => {

    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}

// Export module
export default Routes;