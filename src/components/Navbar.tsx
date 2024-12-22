import harkirat from "../assets/harkirat.jpg"
import { Moon } from "lucide-react"

export default function Navbar() {
    return (
        <div className="flex justify-between border-b text-neutral-50 ">
            <div className="m-2 text-neutral-50	flex justify-normal">
                <div className="p-2 ml-20"><img src={harkirat} alt="harkirat singh" className="object-cover rounded-full h-9"/></div>
                <div className="text-blue-600 p-2 font-bold text-2xl">100xDevs</div>
            </div>
            <div className="flex justify-normal m-2 mt-2 ">
                <div className="py-2 px-2 m-2 text-neutral-50 mt-2"><Moon /></div>
                <div className=" py-4 pt-3 px-4 rounded-md bg-slate-50 text-black m-1 font-sans text-sm h-[75%] hover:cursor-pointer">Login</div>
                <div className="py-1 pt-3 px-4 mr-20 rounded-md text-neutral-50 bg-blue-600 m-1 font-sans text-sm h-[75%] hover:cursor-pointer">Join Now</div>
            </div>
        </div>
    )
}