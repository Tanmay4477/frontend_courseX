import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css";
import { StrictMode } from 'react';
import { AuthProvider } from './context/AuthContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </AuthProvider>
    </StrictMode>
)
