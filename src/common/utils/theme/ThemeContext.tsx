import { createContext, type PropsWithChildren, useCallback, useContext, useState } from 'react';

type ThemeType = 'dark' | 'light';

type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<ThemeType>('light');

    const toggleTheme = useCallback(() => setTheme(prev => prev === 'dark' ? 'light' : 'dark'), [setTheme]);

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within ThemeContextProvider');
    }
    return context;
}