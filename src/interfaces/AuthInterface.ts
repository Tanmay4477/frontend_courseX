export interface User {
    name?: string;
    email: string;
    password: string;
}

export interface AuthContextType {
    data: User | null;
    login: (user: User) => void;
    logout: () => void;
}