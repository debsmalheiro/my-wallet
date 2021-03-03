// Dependencies
import React from 'react';

// Style
import { Container, TitleContainer, Controllers } from './styles';

// Component
const ContentHeader: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <h1>Título</h1>
            </TitleContainer>
            <Controllers>
                <button type="button">Botão A</button>
                <button type="button">Botão B</button>
            </Controllers>
        </Container>
    )
}

// Export module
export default ContentHeader;