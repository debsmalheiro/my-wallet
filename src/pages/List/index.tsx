// Dependencies
import React from 'react';

// Styles
import {Container} from './styles';

// Components
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

// Component
const List: React.FC = () => {

    const options = [
        {value: 'Jolie', label: 'Jolie'},
        {value: 'Moana', label: 'Moana'},
        {value: 'Maui', label: 'Maui'},
    ];

    return (
        <Container>
            <ContentHeader 
                title="Saídas"
                lineColor="#E44C4F"
            >
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
}

// Export module
export default List;