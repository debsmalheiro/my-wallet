// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Dashboard from '../pages/Dashboard';
import Layout from '../components/Layout';
import List from '../pages/List';

// Component
const AppRoutes: React.FC = () => {

    return (
        <Layout>
            <Switch>
                <Route path='/dashboard' exact component={Dashboard} />
                <Route path='/list/:type' exact component={List} />
            </Switch>
        </Layout>
    )
}

// Export module
export default AppRoutes;