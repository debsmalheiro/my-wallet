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
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';

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

      /* Gráfico de pizza */
      const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;

        const percentGains = (totalGains / total) * 100;
        const percentExpenses = (totalExpenses / total) * 100;

        const data = [
          {
            name: 'Entradas',
            value: totalGains,
            percent: Number(percentGains.toFixed(1)),
            color: '#F7931B',
          },
          { 
            name: 'Saídas',
            value: totalExpenses,
            percent: Number(percentExpenses.toFixed(1)),
            color: '#E44C4E',
          }
        ];

        return data;

      }, [totalGains, totalExpenses])

      /* Gráfico de linhas - HistoryBox */

      const historyData = useMemo(() => {
        return listOfMonths.map((_, month) => {
          let amountEntry = 0;
          gains.forEach(gain => {
            const date = new Date(gain.date);
            const gainMonth = date.getMonth();
            const gainYear = date.getFullYear();

            if(gainMonth === month && gainYear === yearSelected){
              try {
                amountEntry += Number(gain.amount);
              } catch {
                throw new Error('amountEntry is invalid. amountEntry must be valid number.')
              }
            }
          });

          let amountOutput = 0;
          expenses.forEach(expense => {
            const date = new Date(expense.date);
            const expenseMonth = date.getMonth();
            const expenseYear = date.getFullYear();

            if(expenseMonth === month && expenseYear === yearSelected){
              try {
                amountOutput += Number(expense.amount);
              } catch {
                throw new Error('amountOutput is invalid. amountOutput must be valid number.')
              }
            }
          });

          return {
            monthNumber: month,
            month: listOfMonths[month].substr(0, 3),
            amountEntry,
            amountOutput,
          }

        })
        .filter(item => {
          const currentMonth = new Date().getMonth();
          const currentYear = new Date().getFullYear();

          return (yearSelected === currentYear 
            && item.monthNumber <= currentMonth) 
            || (yearSelected < currentYear);
        })
      }, [yearSelected])

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
                <PieChartBox data={relationExpensesVersusGains} />
                <HistoryBox data={historyData} lineColorAmountEntry="#F7931B" lineColorAmountOutput="#E44C4E" />
            </Content>
        </Container>
    );
}

// Export module
export default Dashboard;