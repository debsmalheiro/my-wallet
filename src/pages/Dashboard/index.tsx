// Dependencies
import React, {useState, useMemo, useCallback} from 'react';

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
import BarChartBox from '../../components/BarChartBox';

// Images  
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';
import opsImg from '../../assets/ops.svg';

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

    const handleMonthSelected = useCallback((month: string) => {
        try {
          const parseMonth = Number(month);
          setMonthSelected(parseMonth);
        } catch {
          throw new Error('invalid month value. Is accept 0 - 24.')
        }
      }, []);

      /* Anos */
    
      const handleYearSelected = useCallback((year: string) => {
        try {
          const parseYear = Number(year);
          setYearSelected(parseYear);
        } catch {
          throw new Error('invalid year value. Is accept integer numbers.')
        }
      }, []);

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
            footerText: "Verifique seus gastos e tente cortar os que são descenessários.",
            icon: sadImg,
          }
        } else if(totalGains === 0 && totalExpenses === 0) {
          return {
            title: "Ops!",
            description: "Neste mês não há registros de entradas ou saídas",
            footerText: "Parece que você não fez nenhum registro no mês e ano selecionado.",
            icon: opsImg,
          }
        }
        else if (totalBalance === 0) {
          return {
            title: "Ufaa!",
            description: "Neste mês, você gastou tudo o que ganhou.",
            footerText: "Tenha cuidado! No próximo mês tente poupar o seu dinheiro.",
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

      }, [totalGains, totalExpenses ,totalBalance]);

      /* Gráfico de pizza */
      const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;

        const percentGains = Number(((totalGains / total) * 100).toFixed(1));
        const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));

        const data = [
          {
            name: 'Entradas',
            value: totalGains,
            percent: percentGains ? percentGains : 0,
            color: '#F7931B',
          },
          { 
            name: 'Saídas',
            value: totalExpenses,
            percent: percentExpenses ? percentExpenses : 0,
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

      /* Gráfico de exibição recorrentes e eventuais */ 

      const relationGainsRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains
        .filter((gain) => {
          const date = new Date(gain.date);
          const month = date.getMonth() + 1;
          const year = date.getFullYear();

          return month === monthSelected && year === yearSelected;
        })
        .forEach((gain) => {
          if(gain.frequency === 'recorrente'){
            return amountRecurrent += Number(gain.amount);
          }
          if(gain.frequency === 'eventual'){
            return amountEventual += Number(gain.amount);
          }
        });

        const total = amountRecurrent + amountEventual;

        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

        return [
          {
            name: 'Recorrentes',
            amount: amountRecurrent,
            percent: percentRecurrent ? percentRecurrent : 0,
            color: '#F7931B',
          },
          {
            name: 'Eventuais',
            amount: amountEventual,
            percent: percentEventual ? percentEventual : 0,
            color: '#E44C4E',
          },
        ];

      }, [yearSelected, monthSelected]);

      const relationExpensevesRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses
        .filter((expense) => {
          const date = new Date(expense.date);
          const month = date.getMonth() + 1;
          const year = date.getFullYear();

          return month === monthSelected && year === yearSelected;
        })
        .forEach((expense) => {
          if(expense.frequency === 'recorrente'){
            return amountRecurrent += Number(expense.amount);
          }
          if(expense.frequency === 'eventual'){
            return amountEventual += Number(expense.amount);
          }
        });

        const total = amountRecurrent + amountEventual;

        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

        return [
          {
            name: 'Recorrentes',
            amount: amountRecurrent,
            percent: percentRecurrent ? percentRecurrent : 0,
            color: '#F7931B',
          },
          {
            name: 'Eventuais',
            amount: amountEventual,
            percent: percentEventual ? percentEventual : 0,
            color: '#E44C4E',
          },
        ];

      }, [yearSelected, monthSelected]);


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
                <BarChartBox title="Entradas" data={relationGainsRecurrentVersusEventual} />
                <BarChartBox title="Saídas" data={relationExpensevesRecurrentVersusEventual} />
            </Content>
        </Container>
    );
}

// Export module
export default Dashboard;