// Dependencies
import React, {useMemo} from 'react';

// Style
import { Container, Profile, Welcome, UserName } from './styles';

// Emojis
import emojis from '../../utils/emojis';

// Component
const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, [])

    return (
        <Container>
            <h1>Toggle</h1>
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName> Déborah Malheiro</UserName>
            </Profile>
        </Container>
    )
}

// Export module
export default MainHeader;