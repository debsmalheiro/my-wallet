// Dependencies
import React from 'react';

// Components
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

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
            <Form onSubmit={() => {}}>
                <FormTitle>Entrar</FormTitle>
                <Input type="email" placeholder="E-mail" required />
                <Input type="password" placeholder="Senha" required />
                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}

// Export module
export default SignIn;