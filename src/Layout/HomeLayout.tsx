import { ThemeContext } from "@/context/ThemeContext";
import { useEffect, useContext } from "react";
import Navbar from "@/components/HomePage/Navbar";
import { SpeedAnimationProvider } from "@/context/SpeedAnimation";


export const HomeLayout = ({children}: {children: React.ReactNode}) => {
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [theme]);

      
    return (
        <div className="px-4 sm:px-8 md:px-20 min-h-screen bg-white text-black dark:bg-black dark:text-white">
          <SpeedAnimationProvider>
            <Navbar />
            {children}
          </SpeedAnimationProvider>
        </div>
    )
}

