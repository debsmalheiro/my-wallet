// Dependencies
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import SignIn from '../pages/SignIn';

// Component
const AuthRoutes: React.FC = () => (
    <Switch>
        <Route component={SignIn} />
    </Switch>
);

// Export module
export default AuthRoutes;