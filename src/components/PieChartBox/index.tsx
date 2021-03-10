// Dependencies
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Style
import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';

// Interface
interface IPieChartBoxProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[];
}

// Component
const PieChartBox: React.FC<IPieChartBoxProps> = ({ data }) => (
    <Container>
        <SideLeft>
            <LegendContainer>
                <h2>Relação</h2>
                {data.map(indicator => (
                    <Legend key={indicator.name} color={indicator.color}>
                        <div>{indicator.percent}%</div>
                        <span>{indicator.name}</span>
                    </Legend>
                ))    
                }
                {/* <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend> */}
            </LegendContainer>
        </SideLeft>
        <SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} labelLine={false} dataKey="percent">
                        {
                            data.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
);

// Export module
export default PieChartBox;