// Dependencies
import styled from 'styled-components';

// Interface
interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 260px;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    margin: 10px 0;
    border-radius: 7px;
    display: flex;
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;
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
        font-size: 18px;
        text-align: center;
        line-height: 40px;
    }

    > span {
        margin-left: 5px;
    }
`;

export const SideRight = styled.main``;
