import harkirat from "../../assets/harkirat.jpg";
import { FiMoon } from "react-icons/fi";
import { useState } from "react";
import { AuthType } from "../Auth/Auth";
import { Auth } from "../Auth/Auth";
import { motion } from "framer-motion";

interface NavbarParams {
    toggleTheme: () => void;
}


export default function Navbar({ toggleTheme }: NavbarParams) {

    const [cProp, setCProp] = useState<AuthType | null>();

    function handleJoinNow() {
        if(cProp === AuthType.Signup) {
            setCProp(null)
        }
        else {
            setCProp(AuthType.Signup)
        }
    }

    function handleLogin() {
        if(cProp === AuthType.Signin) {
            setCProp(null)
        }
        else {
            setCProp(AuthType.Signin)
        }
    }
    
    return (
        <header className="sticky top-0 z-50 bg-black">
            <div className="border-b border-[#b3b3b3] border-opacity-30 flex justify-between items-center py-3">
                <div className="flex justify-normal items-center gap-2">
                    <div><img src={harkirat} alt="100x devs logo" className="size-12 rounded-full"/></div>
                    <div className="font-satoshiBold bg-gradient-to-b from-blue-400 to-blue-700 text-transparent bg-clip-text text-2xl">100xDevs</div>
                </div>
                <div className="flex justify-normal items-center gap-6">
                    <FiMoon className="text-white text-2xl hover:text-blue-500" onClick={toggleTheme}/>
                    <div className="flex justify-normal items-center gap-2">
                        <button className="text-black bg-white rounded-lg px-4 py-2 text-sm" onClick={handleLogin}>Login</button>
                        <button className="text-white bg-gradient-to-b from-blue-400 to-blue-700 rounded-lg px-4 py-2 text-sm" onClick={handleJoinNow}>Join Now</button>
                    </div>
                </div>
            </div>
            <div className="">
                {( <motion.div className="overlay" initial={{opacity: 0}} animate={{ opacity: 0.6}} transition={{duration: 0.3}} />)}
                {cProp && <div className="absolute z-50 w-full"><Auth cProp={cProp} setCProp={setCProp} /></div>}
            </div>
        </header>
    )
}