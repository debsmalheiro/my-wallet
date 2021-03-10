// Dependencies
import React from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Style
import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';

// Component
const PieChart: React.FC = () => (
    <Container>
        <SideLeft>
            <LegendContainer>
                <h2>Relação</h2>
                <Legend color="#F7931B">
                    <div>5%</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>
        </SideLeft>
        <SideRight>
            {/* <ResponsiveContainer>
                <PieChart>
                    <Pie data={[]} labelLine={false} dataKey="percent">

                    </Pie>
                </PieChart>
            </ResponsiveContainer> */}
        </SideRight>
    </Container>
);

// Export module
export default PieChart;