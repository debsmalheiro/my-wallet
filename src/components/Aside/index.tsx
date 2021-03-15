// Dependencies
import React, {useState} from 'react';

// Components
import Toggle from '../Toggle';

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
    ThemeToggleFooter,
} from './styles';

// hooks
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

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
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }
    
    const handleToggleMenu = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
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
            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle 
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    )
}

// Export module
export default Aside;