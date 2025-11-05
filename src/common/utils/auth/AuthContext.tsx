import { createContext, type PropsWithChildren, useCallback, useContext, useState } from 'react';

type AuthType = 'good' | 'bad';

const AuthStateContext = createContext<AuthType | null>(null);
const AuthControlContext = createContext<() => void>(() => {});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
    const [auth, setAuth] = useState<AuthType>('good');

    const toggleAuth = useCallback(() => {
        setAuth(prev => prev === 'good' ? 'bad' : 'good')
    }, [setAuth]);

    return (
        <AuthStateContext.Provider value={auth}>
            <AuthControlContext.Provider value={toggleAuth}>{children}</AuthControlContext.Provider>
        </AuthStateContext.Provider>
    );
};

export const useAuthState = () => {
    const context = useContext(AuthStateContext);

    if (!context) {
        throw new Error('useAuthState must be used within AuthContextProvider');
    }
    return context;
};

export const useAuthControl = () => {
    const context = useContext(AuthControlContext);

    if (!context) {
        throw new Error('useAuthControl must be used within AuthContextProvider');
    }
    return context;
};
