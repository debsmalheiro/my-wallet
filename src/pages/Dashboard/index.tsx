// Dependencies
import React, {useState, useMemo} from 'react';

// Styles
import {Container, Content} from './styles';

// Components
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput/index';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

// Images  
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';

// Utils
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
            <Content>
                <WalletBox 
                    title="Saldo"
                    amount={150.00}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="dolar"
                    color="#4E41F0"
                />
                <WalletBox 
                    title="Entradas"
                    amount={5000.00}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                    color="#F7931B"
                />
                <WalletBox 
                    title="Saída"
                    amount={4850.00}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                    color="#E44C4E"
                />
                <MessageBox 
                  title="Muito bem!"
                  description="Sua carteira está positiva!"
                  footerText="Continue assim! Considere investir o seu saldo."
                  icon={happyImg}
                />
            </Content>
        </Container>
    );
}

// Export module
export default Dashboard;