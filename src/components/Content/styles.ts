// Dependencies
import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};

    padding: 25px;

    /* Barra de rolagem */

    /* Só pode aparecer 100% descontando os 70px do cabeçalho */
    height: calc(100vh - 70px);
    /* Para não mostrar o que passa da área do conteúdo */
    overflow-y: scroll; 

    /* Estilizando o scroll bar */

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