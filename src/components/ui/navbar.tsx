import harkirat from "../../assets/harkirat.jpg";
import { FiMoon } from "react-icons/fi";
import { IoReorderThreeSharp } from "react-icons/io5";

export default function Navbar() {
    
    return (
        <header className="sticky top-0 z-50 bg-black">
            <div className="border-b border-[#b3b3b3] border-opacity-30 flex justify-between items-center py-3">
                <div className="flex justify-normal items-center gap-2 rounded-full">
                    <div><img src={harkirat} alt="100x devs logo" className="size-12 rounded-full"/></div>
                    <div className="font-satoshiBold bg-gradient-to-b from-blue-400 to-blue-700 text-transparent bg-clip-text text-2xl hidden sm:block">100xDevs</div>
                </div>
                <div className="flex justify-normal items-center gap-4">
                    <FiMoon className="text-white text-2xl hover:text-blue-500"/>
                    <div className="hidden sm:block">
                        <div className="flex justify-normal items-center gap-2">
                            <button className="text-black bg-white rounded-lg px-4 py-2 text-sm">Login</button>
                            <button className="text-white bg-gradient-to-b from-blue-400 to-blue-700 rounded-lg px-4 py-2 text-sm">Join Now</button>
                        </div>
                    </div>
                    <div className="sm:hidden">
                        <IoReorderThreeSharp className="text-4xl text-white hover:text-blue-500" />
                    </div>
                </div>
            </div>
        </header>
    )
}