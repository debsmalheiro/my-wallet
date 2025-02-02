// Dependencies
import styled, {keyframes} from 'styled-components';

// Interface
interface ILegendProps {
    color: string;
}

// Component
const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50% {
        opacity: 0.3;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    margin: 10px 0;
    padding: 30px 20px;
    border-radius: 7px;

    animation: ${animate} 0.5s;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 20px;
        padding-left: 18px;
    }

    @media(max-width: 1200px){
        flex-direction: column;
    }
`; 

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
`; 

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    margin-left: 16px;
    padding-right: 18px;
    
    > div {
        background-color: ${props => props.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
        font-size: 14px;
        text-align: center;
        line-height: 40px;
    }

    > span {
        margin-left: 5px;
    }

    @media(max-width: 1280px){

        > div {
            width: 30px;
            height: 30px;
        }
    }
`; 

export const ChartContainer = styled.div`
    flex: 1;
    height: 260px;
`;