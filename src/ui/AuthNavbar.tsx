import harkirat from "@/assets/harkirat.jpg"
import { FaSearch } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useSpeedAnimate } from "@/context/SpeedAnimation";
import { motion } from "framer-motion";


export default function AuthNavbar() {
    const {theme} = useContext(ThemeContext);    
    const { toggleTheme} = useContext(ThemeContext);
    const { animate, animateHandler } = useSpeedAnimate(); 
    
    return (
        <div>
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
            <div className="flex justify-between py-5 border-b px-2">
                <div className="flex justify-normal gap-2 items-center">
                    <button onClick={animateHandler}><img src={harkirat} className="size-10 rounded-full" /></button>
                    <button onClick={animateHandler} className="font-satoshiBold bg-gradient-to-b from-blue-400 to-blue-700 text-transparent bg-clip-text text-2xl hidden xs:block">100xDevs</button>
                </div>
                <div className="flex justify-start gap-8 text-xl">
                    <button><FaSearch /></button>
                    <button onClick={toggleTheme}>{theme === "light" ? <IoSunnyOutline /> : <FaRegMoon />}</button>
                    <button className="bg-blue-500 rounded-full p-3"><FiUser /></button>
                </div>
            </div>
        </div>
    )
}