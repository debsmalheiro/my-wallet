// Dependencies
import React, {useState, useMemo} from 'react';

// hooks
import { useTheme } from '../../hooks/theme';

// Style
import { Container, Profile, Welcome, UserName } from './styles';

// Emojis
import emojis from '../../utils/emojis';

// Components
import Toggle from '../Toggle';

// Component
const MainHeader: React.FC = () => {
    const {toggleTheme, theme} = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, [])

    return (
        <Container>
            <Toggle 
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName> Déborah Malheiro</UserName>
            </Profile>
        </Container>
    )
}

// Export module
export default MainHeader;