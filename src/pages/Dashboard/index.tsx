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
import grinningImg from '../../assets/grinning.svg';

// Utils
import listOfMonths from '../../utils/months';

// Component
const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    /* Transformando meses */

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return { 
            value: index + 1,
            label: month,
            }
        })
      }, [])
    
    /* Transformando anos */

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

    /* Meses */

    const handleMonthSelected = (month: string) => {
        try {
          const parseMonth = Number(month);
          setMonthSelected(parseMonth);
        } catch {
          throw new Error('invalid month value. Is accept 0 - 24.')
        }
      }

      /* Anos */
    
      const handleYearSelected = (year: string) => {
        try {
          const parseYear = Number(year);
          setYearSelected(parseYear);
        } catch {
          throw new Error('invalid year value. Is accept integer numbers.')
        }
      }

      /* Informações Dinâmicas */

      /* Entradas */
      const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
          const date = new Date(item.date);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;

          if(month === monthSelected && year === yearSelected) {
            try {
              total += Number(item.amount)
            } catch {
              throw new Error('Invalid amount! Amount must be number.')
            }
          }
        });

        return total;
      }, [monthSelected, yearSelected]);


      /* Saídas */
      const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
          const date = new Date(item.date);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;

          if(month === monthSelected && year === yearSelected) {
            try {
              total += Number(item.amount)
            } catch {
              throw new Error('Invalid amount! Amount must be number.')
            }
          }
        });

        return total;
      }, [monthSelected, yearSelected]);

      /* Saldo */
      const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
      }, [totalGains, totalExpenses]);

      /* MessageBox */

      const message = useMemo(() => {
        if(totalBalance < 0) {
          return {
            title: "Que triste!",
            description: "Neste mês, você gastou mais do que deveria.",
            footerText: "Verifique seus gastos e tente cortar algumas coisas descenessárias.",
            icon: sadImg,
          }
        }
        else if (totalBalance === 0) {
          return {
            title: "Ufaa!",
            description: "Neste mês, você gastou tudo o que ganhou.",
            footerText: "Tenha cuidado! No próximo mês tente poupat o seu dinheiro.",
            icon: grinningImg,
          }
        } else {
          return {
            title: "Muito bem!",
            description: "Sua carteira está positiva!",
            footerText: "Continue assim! Considere investir o seu saldo.",
            icon: happyImg,
          }
        }

      }, [totalBalance])

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
                    amount={totalBalance}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="dolar"
                    color="#4E41F0"
                />
                <WalletBox 
                    title="Entradas"
                    amount={totalGains}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                    color="#F7931B"
                />
                <WalletBox 
                    title="Saída"
                    amount={totalExpenses}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                    color="#E44C4E"
                />
                <MessageBox 
                  title={message.title}
                  description={message.description}
                  footerText={message.footerText}
                  icon={message.icon}
                />
            </Content>
        </Container>
    );
}

// Export module
export default Dashboard;