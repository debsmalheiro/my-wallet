// Dependencies
import React, { useState, useEffect, useMemo } from 'react';
import { uuid } from 'uuidv4';

// Styles
import { Container, Content, Filters } from './styles';

// Components
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

// Utils
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

// Interface
interface IRouteParms {
  match: {
    params: {
      type: string;
    }
  }
}

interface IDate {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

// Component
const List: React.FC<IRouteParms> = ({ match }) => {

  const [data, setData] = useState<IDate[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(['recorrente', 'eventual']);

  const movimentType = match.params.type;

  const pageData = useMemo(() => {
    return movimentType === 'entry-balance' ? {
      title: 'Entradas',
      lineColor: '#4E41F0',
      data: gains,
    } : {
      title: 'Saída',
      lineColor: '#E44C4E',
      data: expenses,
    }   
  }, [movimentType]);

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

    const { data } = pageData;

    data.forEach(item => {
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

  }, [pageData])

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);

    if (alreadySelected >= 0){
      const filtered = frequencyFilterSelected.filter(item => item !== frequency);
      setFrequencyFilterSelected(filtered);
    } else {
      setFrequencyFilterSelected((prev) => [...prev, frequency]);
    }
  }

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch {
      throw new Error('invalid month value. Is accept 0 - 24.')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch {
      throw new Error('invalid year value. Is accept integer numbers.')
    }
  }

  useEffect(() => {

    const { data } = pageData;

    /* Filtrando pelo mês e ano */
    const filteredData = data.filter(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === monthSelected 
        && year === yearSelected 
        && frequencyFilterSelected.includes(item.frequency);  
    });

    /* Formatando o dia, mês e ano */
    const formattedData = filteredData.map(item => {

      return {
        id: uuid(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
      }
    })

    setData(formattedData);
  }, [pageData, monthSelected, yearSelected, frequencyFilterSelected])

  return (
    <Container>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
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

      <Filters>
        <button 
          type="button"
          className={`tag-filter tag-filter-recurrent
          ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>
        <button 
          type="button"
          className={`tag-filter tag-filter-eventual
          ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        { 
          data.map(item => (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dateFormatted}
              amount={item.amountFormatted}
            />
          ))
        } 
      </Content>
    </Container>
  );
};

// Export module
export default List;
