// Dependencies
import React, {useState, useEffect, useMemo} from "react";

// Styles
import { Container, Content, Filters } from "./styles";

// Components
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

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

  const months = [
    { value: 1, label: "Janeiro" },
    { value: 2, label: "Fevereiro" },
    { value: 3, label: "Março" },
    { value: 4, label: "Abril" },
    { value: 5, label: "Maio" },
    { value: 6, label: "Junho" },
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
    { value: 10, label: "Outubro" },
    { value: 11, label: "Novembro" },
    { value: 12, label: "Dezembro" },
  ];

  const years = [
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 },
  ];

  useEffect(() => {
    const response = listData.map(item => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dateFormatted: item.date,
        tagColor: '#4E41F0',
      }
    })

    setData(response);
  }, [])

  return (
    <Container>
      <ContentHeader title={pageTitle} lineColor={lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
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
