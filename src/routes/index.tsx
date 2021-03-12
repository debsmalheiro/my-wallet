// Dependencies
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

// Component
const Routes: React.FC = () => {

    return (
        <BrowserRouter>
            {/* <AppRoutes /> */}
            <AuthRoutes />
        </BrowserRouter>
    )
}

// Export module
export default Routes;