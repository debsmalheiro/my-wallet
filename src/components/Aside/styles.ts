// Dependencies
import styled, { css } from 'styled-components';

// Interface
interface IContainerProps {
    menuIsOpen: boolean;
}

interface IThemeToggleFooterProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative;

    @media(max-width: 600px) {
        padding-left: 20px;
        position: fixed;
        z-index: 2;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        /* HEADER */
        width: 170px; 
        
        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;

    @media(max-width: 600px) {
        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px) {
        display: none;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    margin: 10px 0;

    display: flex;
    align-items: center;

    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    color: ${props => props.theme.colors.info};
    border: none;
    background: none;
    margin: 10px 0;
    font-size: 16px;
    display: flex;
    align-items: center;

    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7s;
    }

    display: none;

    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media(max-width: 470px) {
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }
`;