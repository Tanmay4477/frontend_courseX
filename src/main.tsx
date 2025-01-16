import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css";
import { StrictMode } from 'react';
import { AuthProvider } from './context/AuthContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <ThemeProvider>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider> 
            </ThemeProvider>
        </AuthProvider>
    </StrictMode>
)
