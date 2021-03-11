// Dependencies
import React from 'react';

// Components


// Style
import { Container } from './styles';

// Interface
interface IMessageBoxProps {
    title: string;
    description: string;
    footerText: string;
    icon: string;
}

// Component
const MessageBox: React.FC<IMessageBoxProps> = ({ title, description, footerText, icon}) => (
        <Container>
            <header>
                <h1>
                    {title}
                    <img src={icon} alt={title} />
                </h1>
                <p>{description}</p>
            </header>
            <footer>
                <span>{footerText}</span>
            </footer>
        </Container>
);

// Export module
export default MessageBox;