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

// Utils
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

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
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
  ];

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
        id: String(new Date().getTime()) + item.amount,
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
