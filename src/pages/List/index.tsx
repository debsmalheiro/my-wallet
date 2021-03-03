// Dependencies
import React from "react";

// Styles
import { Container, Content } from "./styles";

// Components
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

// Component
const List: React.FC = () => {
  const options = [
    { value: "Jolie", label: "Jolie" },
    { value: "Moana", label: "Moana" },
    { value: "Maui", label: "Maui" },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4F">
        <SelectInput options={options} />
      </ContentHeader>
      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/03/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
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
