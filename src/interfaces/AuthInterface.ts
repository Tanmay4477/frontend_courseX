export interface User {
    name?: string;
}

export interface AuthContextType {
    data: User | null;
    login: (user: User) => void;
    logout: () => void;
}