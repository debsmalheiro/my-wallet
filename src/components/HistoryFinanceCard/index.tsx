// Dependencies
import React from "react";

// Style
import { Container, Tag } from "./styles";

// Interface
interface IHistoryFinanceCardProps {
  cardColor: string;
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

// Component
const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return (
    <Container color={cardColor}>
        <Tag color={tagColor} />
        <div>
            <span>{title}</span>
            <small>{subtitle}</small>
        </div>
        <h3>{amount}</h3>
    </Container>
  )
};

// Export module
export default HistoryFinanceCard;
