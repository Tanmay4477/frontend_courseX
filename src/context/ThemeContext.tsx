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
    const localTheme = localStorage.getItem("theme") as ThemeInterface || ThemeInterface.dark;
    const [theme, setTheme] = useState<ThemeInterface>(localTheme);

    const toggleTheme = () => {
        const newTheme = theme === ThemeInterface.dark ? ThemeInterface.light : ThemeInterface.dark;
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
