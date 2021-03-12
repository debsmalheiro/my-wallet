// Dependencies
import React, {useState} from 'react';

// Style
import { 
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton, 
    ToggleMenu,
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
    MdExitToApp,
    MdClose,
    MdMenu,
} from 'react-icons/md';

// Component
const Aside: React.FC = () => {
    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

    const { signOut } = useAuth();

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
                </ToggleMenu>
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