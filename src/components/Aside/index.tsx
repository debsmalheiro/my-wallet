// Dependencies
import React from 'react';

// Style
import { 
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink
} from './styles';

// Images
import logoImg from '../../assets/logo.svg';

// Icons
import { 
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward, 
    MdExitToApp
} from 'react-icons/md';

// Component
const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo My Wallet" />
                <Title>My Wallet</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowDownward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowUpward />
                    Saídas
                </MenuItemLink>
                <MenuItemLink href="/exit">
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}

// Export module
export default Aside;