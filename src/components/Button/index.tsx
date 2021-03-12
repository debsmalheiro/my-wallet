// Dependencies
import React, { ButtonHTMLAttributes } from 'react';

// Style
import { Container } from './styles';

// Interface
type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// Component
const Button: React.FC<IButtonProps> = ({children, ...rest}) => (
        <Container {...rest}>
                {children}
        </Container>
);

// Export module
export default Button;