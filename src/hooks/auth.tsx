// Dependencies
import React, { createContext, useState, useContext } from 'react';

// Interface
interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

// Component
const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children}) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@my-wallet:logged');

        /* Retorno lógico (!!): Tem conteúdo: true, Não tem conteúdo: false */
        return !!isLogged; 
    });

    const signIn = (email: string, password: string) => {
        if(email === 'jolie@gmail.com' && password === '123456'){
            localStorage.setItem('@my-wallet:logged', 'true');
            setLogged(true);
        } else {
            alert('Usuário ou senha inválidos!');
        }
    }

    const signOut = () => {
        localStorage.removeItem('@my-wallet:logged');
        setLogged(false);
    };

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}

// Export module
export { AuthProvider, useAuth };