import { createContext, useState, useContext } from "react";
import { AuthContextType, User } from "@/interfaces/AuthInterface"

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode}) => {
    const [data, setData] = useState<User | null>(null);

    const login = ( userData: User ) => {
        setData(userData);
    }

    const logout = () => {
        setData(null);
    }

    return (
        <AuthContext.Provider value={{ data, login, logout }} >
            {children}
        </AuthContext.Provider>
    );
}; 

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if(context === null) {
        throw new Error('User must be logged in')
    }
    return context
};

