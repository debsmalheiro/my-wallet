// Dependencies
import React from 'react';

// Style
import { Container } from './styles';

// Interface
interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
}

// Component
const SelectInput: React.FC<ISelectInputProps> = ({options}) => {
    return (
        <Container>
            <select>
                {
                    options.map(option => (
                        <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </Container>
    )
}

// Export module
export default SelectInput;