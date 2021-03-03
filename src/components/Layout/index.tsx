// Dependencies
import React from 'react';

// Style
import { Grid } from './styles';

// Components
import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

// Component
const Layout: React.FC = ({ children }) => {
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content>
                {children}
            </Content>
        </Grid>
    );
}

// Export module
export default Layout;