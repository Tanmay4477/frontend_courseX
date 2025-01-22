import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { IoChatboxOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { easeInOut, motion } from "framer-motion";


export default function SideBar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const menuClick = () => {
        setIsMenuOpen((prev) => !prev);
    }
    
    return (
            <motion.div 
                initial={false}
                animate={{x: isMenuOpen ? "0%" : "0%"}}
                transition={{duration:1, ease:easeInOut}}
                className={`hidden fixed top-0 left-0 border-r lg:block h-screen  ${isMenuOpen ? "w-64" : "w-20"}`}>
                <div className={`flex flex-col gap-10 tracking-tight text-2xl p-5`}>
                    <div className="flex flex-col gap-10">
                        <div className="text-2xl tracking-tighter flex justify-start gap-2">
                            <button onClick={menuClick}>{isMenuOpen ? <TbLayoutSidebarLeftCollapse /> : <TbLayoutSidebarRightCollapse />}</button>
                            {isMenuOpen && <div>Menu</div>}
                        </div>
                        <div className="border-b -m-5"></div>
                    </div>
                    
                    <div className="flex justify-normal items-center gap-2">
                        <button><FiHome /></button>
                        {isMenuOpen && <div className="text-lg">Home</div>}
                    </div>
                    <div className="flex justify-normal items-center gap-2">
                        <button><PiBookmarkSimpleBold /></button>
                        {isMenuOpen && <div className="text-lg">Bookmarks</div>}
                    </div>
                    <div className="flex justify-normal items-center gap-2">
                        <button><IoChatboxOutline /></button>
                        {isMenuOpen && <div className="text-lg">Questions</div>}
                    </div>
                    <div className="flex justify-normal items-center gap-2">
                        <button><FaClockRotateLeft /></button>
                        {isMenuOpen && <div className="text-lg">Watch History</div>}
                    </div>
                </div>
        </motion.div>
    )
}