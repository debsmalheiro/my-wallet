// Dependencies
import React, {useMemo} from 'react';
import CountUp from 'react-countup';

// Style
import { Container } from './styles';

// Images
import dolarImg from '../../assets/dolar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

// Components

// Interface
interface IWalletBoxProps {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

// Component
const WalletBox: React.FC<IWalletBoxProps> = ({ title, amount, footerLabel, icon, color}) => {
    
    const iconSelected = useMemo(() => {
        switch(icon) {
            case 'dolar': 
                return dolarImg;
            case 'arrowUp': 
                return arrowUpImg;
            case 'arrowDown': 
                return arrowDownImg;
            default: 
                return undefined;
        }
    }, [icon]);
    
    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <strong>R$ </strong>
                <CountUp 
                    end={amount}
                    separator="."
                    decimal=","
                    decimals={2}
                />
            </h1>
            <small>{footerLabel}</small>
            <img src={iconSelected} alt={title} />
        </Container>
    )
}

// Export module
export default WalletBox;