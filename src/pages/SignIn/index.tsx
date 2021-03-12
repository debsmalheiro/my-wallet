// Dependencies
import React, {useState} from 'react';

// Components
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

// hooks
import {useAuth} from '../../hooks/auth';

// Style
import {Container, Logo, Form, FormTitle} from './styles';

// Component
const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="My Wallet" />
                <h2>My Wallet</h2>
            </Logo>
            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>Entrar</FormTitle>
                <Input 
                type="email"
                placeholder="E-mail" 
                required
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)}/>
                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}

// Export module
export default SignIn;