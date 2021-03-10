// Dependencies
import React from 'react';
import {ResponsiveContainer, BarChart, Bar, Cell, Tooltip} from 'recharts';

// Style
import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';

// Utils
import formatCurrency from '../../utils/formatCurrency';

// Interface
interface IBarChartBoxProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[],
}

// Component
const BarChartBox: React.FC<IBarChartBoxProps> = ({ title, data}) => {
    return (
        <Container>
            <SideLeft>
            <LegendContainer>
                <h2>{title}</h2>
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
                    <BarChart data={data}>
                        <Bar dataKey="amount" name="Valor">
                            {
                                data.map((indicator) => (
                                    <Cell 
                                        key={indicator.name}
                                        cursor="pointer" 
                                        fill={indicator.color}
                                        
                                    />
                                ))
                            }
                        </Bar>
                        <Tooltip
                            cursor={{ fill: 'none' }}
                            formatter={(value: any) => formatCurrency(Number(value))} 
                        />
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    )
}

// Export module
export default BarChartBox;