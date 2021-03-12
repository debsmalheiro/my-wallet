// Dependencies
import React from 'react';

// Components
import logoImg from '../../assets/logo.svg';

// Style
import {Container, Logo, Form, FormTitle} from './styles';

// Component
const SignIn: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="My Wallet" />
                <h2>My Wallet</h2>
            </Logo>
            <Form>
                <FormTitle>Entrar</FormTitle>
                <input type="text"></input>
                <input type="text"></input>
                <button type="submit">Acessar</button>
            </Form>
        </Container>
    );
}

// Export module
export default SignIn;