import { SpeedAnimationProvider } from "@/context/SpeedAnimation";
import { ThemeContext } from "@/context/ThemeContext";
import SideBar from "@/ui/SideBar";
import { useEffect, useContext } from "react";


const AuthLayout = ({children}: {children: React.ReactNode}) => {
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [theme]);
      
    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 min-h-screen bg-white text-black dark:bg-black dark:text-white">
            <SpeedAnimationProvider>
                <SideBar />
                {children}
            </SpeedAnimationProvider>
        </div>
    )
}

export default AuthLayout