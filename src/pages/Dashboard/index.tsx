// Dependencies
import React, {useState, useMemo} from 'react';

// Styles
import {Container} from './styles';

// Components
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput/index';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

// Utils
// import formatCurrency from '../../utils/formatCurrency';
// import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

// Component
const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const options = [
        {value: 'Jolie', label: 'Jolie'},
        {value: 'Moana', label: 'Moana'},
        {value: 'Maui', label: 'Maui'},
    ];

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return { 
            value: index + 1,
            label: month,
            }
        })
      }, [])
    
      const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains,].forEach(item => {
          const date = new Date(item.date);
          const years = date.getFullYear();
    
          if (!uniqueYears.includes(years)) {
            uniqueYears.push(years);
          }
        });
    
        return uniqueYears.map(years => {
          return { 
            value: years,
            label: years
          }
        });
    
      }, []);

    const handleMonthSelected = (month: string) => {
        try {
          const parseMonth = Number(month);
          setMonthSelected(parseMonth);
        } catch(error) {
          throw new Error('invalid month value. Is accept 0 - 24.')
        }
      }
    
      const handleYearSelected = (year: string) => {
        try {
          const parseYear = Number(year);
          setYearSelected(parseYear);
        } catch(error) {
          throw new Error('invalid year value. Is accept integer numbers.')
        }
      }

    return (
        <Container>
            <ContentHeader 
                title="Dashboard"
                lineColor="#F7931B"
            >
                <SelectInput 
                    options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />
                <SelectInput
                options={years}
                onChange={(e) => handleYearSelected(e.target.value)}
                defaultValue={yearSelected}
                />
            </ContentHeader>
        </Container>
    );
}

// Export module
export default Dashboard;