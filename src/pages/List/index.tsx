// Dependencies
import React, {useMemo} from "react";

// Styles
import { Container, Content, Filters } from "./styles";

// Components
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

// Interface
interface IRouteParms {
  match: {
    params: {
      type: string;
    }
  }
}

// Component
const List: React.FC<IRouteParms> = ({match}) => {

  const {type} = match.params;

  const pageTitle = useMemo(() => {
    return type === 'entry-balance' ? 'Entrada' : 'Saída'
   }, [type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#E44C4E';
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
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  );
};

// Export module
export default List;
