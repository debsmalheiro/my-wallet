// Dependencies
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

// hooks
import {useAuth} from '../hooks/auth';

// Component
const Routes: React.FC = () => {

    const {logged} = useAuth();

    return (
        <BrowserRouter>
            {logged ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}

// Export module
export default Routes;