import { createContext, useState, useContext } from "react";
import { AuthContextType, User } from "@/interfaces/AuthInterface"
import UserAPI from "@/api/UserAPI";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode}) => {
    const [data, setData] = useState<User | null>(null);

    const login = ( userData: User ) => {
        console.log(userData, "this is the user dta");
        setData(userData);
    }

    const logout = async() => {
        try {
            setData(null);
            UserAPI.logout();
            <Navigate to="/signin" />
    } catch (error){
            console.log("Error occur in logging you out", error);
        }
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

