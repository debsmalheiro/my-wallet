// Dependencies
import React, { InputHTMLAttributes } from 'react';

// Style
import { Container } from './styles';

// Interface
type IInputProps = InputHTMLAttributes<HTMLInputElement>;

// Component
const Input: React.FC<IInputProps> = ({...rest}) => (
        <Container {...rest} />
);

// Export module
export default Input;