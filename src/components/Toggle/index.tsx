// Dependencies
import React from 'react';

// Styles
import { Container, ToggleLabel, ToggleSelector } from './styles';

// Interface
interface IToggleProps {
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}

// Component
const Toggle: React.FC<IToggleProps> = ({ labelLeft, labelRight, checked, onChange }) => (
    <Container>
        <ToggleLabel>{labelLeft}</ToggleLabel>
        <ToggleSelector 
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={onChange}
        />
        <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
)

// Export module 
export default Toggle;