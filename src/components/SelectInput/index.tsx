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
    onChange(e: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    defaultValue?: string | number;
}

// Component
const SelectInput: React.FC<ISelectInputProps> = ({options, onChange, defaultValue}) => {
    return (
        <Container>
            <select onChange={onChange} defaultValue={defaultValue}>
                {
                    options.map(option => (
                        <option 
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))
                }
            </select>
        </Container>
    )
}

// Export module
export default SelectInput;