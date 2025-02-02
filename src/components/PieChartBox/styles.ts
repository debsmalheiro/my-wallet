// Dependencies
import styled, {keyframes} from 'styled-components';

// Interface
interface ILegendProps {
    color: string;
}

// Component
const animate = keyframes`
    0% {
        transform: translateX(100px);
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
    width: 48%;
    height: 260px;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    margin: 10px 0;
    border-radius: 7px;
    display: flex;

    animation: ${animate} 0.5s;

    @media(max-width: 770px){
        display: flex;
        width: 100%;
    }
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    @media(max-width: 1345px){
        padding: 30 15px 0px;
        margin-bottom: 7px;

        > h2 {
            margin-top: 15px;
            margin-bottom: 7px;
        }
    }

    @media(max-width: 420px){
        padding: 30px 20px;
        margin-bottom: 7px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    padding-right: 20px;

    > h2 {
        margin-bottom: 20px;
    }

    max-height: 175px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }

    @media(max-width: 1345px){
        display: flex;
        flex-direction: column;
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    
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

    @media(max-width: 1345px){
        font-size: 14px;
        margin: 3px 0;

        > div {
            width: 35px;
            height: 35px;
            line-height: 35px;
        }

        > span {
            margin-left: 7px;
        }
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media(max-width: 1345px){
        height: 100%;
    }
`;
