// Dependencies
import React from 'react';

// Styles
import { Container, ToggleLabel, ToggleSelector } from './styles';

// Component
const Toggle: React.FC = () => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector 
            checked
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() => console.log('Mudou')}
        />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)

// Export module 
export default Toggle;