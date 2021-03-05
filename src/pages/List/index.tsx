// Dependencies
import React, {useState, useEffect, useMemo} from "react";
import { uuid } from "uuidv4";

// Styles
import { Container, Content, Filters } from "./styles";

// Components
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
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

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

// Component
const List: React.FC<IRouteParms> = ({match}) => {

  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

  const {type} = match.params;

  const pageTitle = useMemo(() => {
    return type === 'entry-balance' ? 'Entrada' : 'Saída'
   }, [type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#E44C4E';
  }, [type])

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type])

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

    listData.forEach(item => {
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

  }, [listData])

  useEffect(() => {

    /* Filtrando pelo mês e ano */
    const filteredData = listData.filter(item => {

      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected; 
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
  }, [listData, monthSelected, yearSelected])

  return (
    <Container>
      <ContentHeader title={pageTitle} lineColor={lineColor}>
        <SelectInput 
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Filters>
        <button 
          type="button"
          className="tag-filter tag-filter-recurrent"
        >
          Recorrentes
        </button>
        <button 
          type="button"
          className="tag-filter tag-filter-eventual"
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        { data.map(item => (
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
