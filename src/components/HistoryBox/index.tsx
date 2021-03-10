// Dependencies
import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip} from 'recharts';

// Style
import { Container, Header, LegendContainer, Legend, ChartContainer } from './styles';

// Utils
import formatCurrency from '../../utils/formatCurrency';

// Interface
interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[]
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

// Component
const HistoryBox: React.FC<IHistoryBoxProps> = ({ data, lineColorAmountEntry, lineColorAmountOutput }) => (
    <Container>
        <Header>
        <h2>Histórico de saldo</h2>
        <LegendContainer>
            <Legend color={lineColorAmountEntry}>
                <div></div>
                <span>Entradas</span>
            </Legend>
            <Legend color={lineColorAmountOutput}>
                <div></div>
                <span>Saídas</span>
            </Legend>
        </LegendContainer>
        </Header>
        <ChartContainer>
        <ResponsiveContainer>
            <LineChart data={data} margin={{top: 5, right: 20, bottom: 5, left: 20}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#CECECE" />
                <XAxis dataKey="month" stroke="#CECECE" />
                <Tooltip formatter={(value: any) => formatCurrency(Number(value))} />
                <Line 
                    name="Entradas"
                    type="monotone" 
                    dataKey="amountEntry" 
                    stroke={lineColorAmountEntry}
                    strokeWidth={5} 
                    dot={{r: 5}} 
                    activeDot={{r: 8}} 
                />
                <Line 
                    name="Saídas"
                    type="monotone" 
                    dataKey="amountOutput" 
                    stroke={lineColorAmountOutput}
                    strokeWidth={5} 
                    dot={{r: 5}} 
                    activeDot={{r: 8}} 
                />
            </LineChart>
        </ResponsiveContainer>
        </ChartContainer>
    </Container>
);

// Export module
export default HistoryBox;