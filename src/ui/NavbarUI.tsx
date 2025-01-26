import harkirat from "@/assets/harkirat.jpg";
import { FiMoon } from "react-icons/fi";
// import { IoReorderThreeSharp } from "react-icons/io5";
import { useSpeedAnimate } from "@/context/SpeedAnimation";
import { IoSunnyOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import NavigateNavbar from "@/interfaces/NavigateNavbar";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export const NavbarUI: React.FC<NavigateNavbar> = ({navigateToLogin, navigateToSignup}) => {
    const {animate, animateHandler} = useSpeedAnimate(); 
    const { toggleTheme} = useContext(ThemeContext);

    return (
        <header className="sticky top-0 z-50">
            <div>{
                animate && <motion.div initial={{x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 0.2, ease: "linear"}} style={{
                    height: "4px",
                    width: "100%",
                    background: "#4D8BF0",
                    position: "fixed",
                    top: 0,
                    left: 0,
                  }} />
            }</div>
            <div className="border-b border-[#b3b3b3] border-opacity-30 flex justify-between items-center py-3">
                <div className="flex justify-normal items-center gap-2 rounded-full">
                    <button onClick={animateHandler}><img src={harkirat} alt="100x devs logo" className="size-10 rounded-full"/></button>
                    <button onClick={animateHandler} className="font-satoshiBold bg-gradient-to-b from-blue-400 to-blue-700 text-transparent bg-clip-text text-2xl hidden sm:block">100xDevs</button>
                </div>
                <div className="flex justify-normal items-center gap-4">
                    <FiMoon onClick={toggleTheme} className="text-2xl hover:text-blue-500 hidden dark:block"/>
                    <IoSunnyOutline onClick={toggleTheme} className="text-2xl hover:text-blue-500 dark:hidden"/>
                    <div className="">
                        <div className="flex justify-normal items-center gap-2">
                            <button onClick={navigateToLogin} className="rounded-lg bg-black dark:bg-white px-4 py-2 text-sm text-white dark:text-black">Login</button>
                            <button onClick={navigateToSignup} className="bg-gradient-to-b from-blue-400 to-blue-700 rounded-lg px-4 py-2 text-sm text-white">Join Now</button>
                        </div>
                    </div>
                    {/* <div className="sm:hidden">
                        <IoReorderThreeSharp className="text-4xl hover:text-blue-500" />
                    </div> */}
                </div>
            </div>
        </header>
    )
}