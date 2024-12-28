import harkirat from "../../assets/harkirat.jpg";
import { FiMoon } from "react-icons/fi";


export default function Navbar() {
    return (
        <div className="">
            <div className="border-b-0 border-white/80 flex justify-between items-center py-3">
                <div className="flex justify-normal items-center gap-2">
                    <div><img src={harkirat} alt="100x devs logo" className="size-12 rounded-full"/></div>
                    <div className="font-satoshiBold bg-gradient-to-b from-blue-400 to-blue-700 text-transparent bg-clip-text text-2xl">100xDevs</div>
                </div>
                <div className="flex justify-normal items-center gap-6">
                    <FiMoon className="text-white text-2xl"/>
                    <div className="flex justify-normal items-center gap-2">
                        <div className="text-black bg-white rounded-lg px-4 py-2 text-sm">Login</div>
                        <div className="text-white bg-gradient-to-b from-blue-400 to-blue-700 rounded-lg px-4 py-2 text-sm">Join Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}