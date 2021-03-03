// Dependencies
import React from 'react';

// Style
import { Container, TitleContainer, Controllers } from './styles';

// Components
import SelectInput from '../SelectInput/ index';

// Component
const ContentHeader: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <h1>Título</h1>
            </TitleContainer>
            <Controllers>
                <SelectInput />
                <SelectInput />
            </Controllers>
        </Container>
    )
}

// Export module
export default ContentHeader;