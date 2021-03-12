// Dependencies
import React from 'react';

// Style
import { 
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
} from './styles';

// hooks
import { useAuth } from '../../hooks/auth';

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

    const { signOut } = useAuth();

    return (
        <Container menuIsOpen={true}>
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
                <MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>
        </Container>
    )
}

// Export module
export default Aside;