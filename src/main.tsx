import { StrictMode } from 'react';
import { router } from '@routes/router';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeContextProvider } from '@common/utils/theme/ThemeContext';

import '@styles/main.css';
import '@i18n/i18n';
import { AuthContextProvider } from '@common/utils/auth/AuthContext';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeContextProvider>
            <AuthContextProvider>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </AuthContextProvider>
        </ThemeContextProvider>
    </StrictMode>
);
