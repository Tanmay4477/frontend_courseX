import { createContext, useState } from "react";

enum ThemeInterface {
    light = "light",
    dark = "dark"
}

interface ThemeContextType {
    theme: ThemeInterface;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: ThemeInterface.dark,
    toggleTheme: () => {}
});


export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<ThemeInterface>(ThemeInterface.dark);

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === ThemeInterface.dark ? ThemeInterface.light : ThemeInterface.dark)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
