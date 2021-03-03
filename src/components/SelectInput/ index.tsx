// Dependencies
import React from 'react';

// Style
import { Container } from './styles';

// Component
const SelectInput: React.FC = () => {
    return (
        <Container>
            <select>
                <option value="a">ana</option>
                <option value="b">breno</option>
                <option value="c">caio</option>
            </select>
        </Container>
    )
}

// Export module
export default SelectInput;