// Dependencies
import React from 'react';

// Style
import { Container, TitleContainer, Controllers } from './styles';

// Components


// Interface
interface IContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

// Component
const ContentHeader: React.FC<IContentHeaderProps> = ({ title, lineColor, children }) => {

    return (
        <Container>
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    )
}

// Export module
export default ContentHeader;