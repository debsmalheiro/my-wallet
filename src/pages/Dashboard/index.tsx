// Dependencies
import React from 'react';

// Styles
import {Container} from './styles';

// Components
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput/index';

// Component
const Dashboard: React.FC = () => {

    const options = [
        {value: 'Jolie', label: 'Jolie'},
        {value: 'Moana', label: 'Moana'},
        {value: 'Maui', label: 'Maui'},
    ];

    return (
        <Container>
            <ContentHeader 
                title="Dashboard"
                lineColor="#F7931B"
            >
                <SelectInput 
                    options={options}
                    onChange={() => {}}
                />
            </ContentHeader>
        </Container>
    );
}

// Export module
export default Dashboard;