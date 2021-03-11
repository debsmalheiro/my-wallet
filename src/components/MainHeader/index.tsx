// Dependencies
import React, {useMemo} from 'react';

// Style
import { Container, Profile, Welcome, UserName } from './styles';

// Emojis
import emojis from '../../utils/emojis';

// Components
import Toggle from '../Toggle';

// Component
const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, [])

    return (
        <Container>
            <Toggle />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName> Déborah Malheiro</UserName>
            </Profile>
        </Container>
    )
}

// Export module
export default MainHeader;