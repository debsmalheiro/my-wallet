// Dependencies
import React from 'react';

// Style
import { Container } from './styles';

// Component
const Content: React.FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

// Export module
export default Content;