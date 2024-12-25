import harkirat from "../assets/harkirat.jpg";
import { Moon } from "lucide-react";

export default function Navbar() {
  return (
      <div className="flex justify-between text-neutral-50 border-b border-[#f9f7f7] border-opacity-15">
        <div className="m-2 text-neutral-50 flex justify-normal">
          <div className="p-2 ml-20">
            <img
              src={harkirat}
              alt="harkirat singh"
              className="object-cover rounded-full h-9"
            />
          </div>
          <div className="hidden bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text font-black tracking-tighter text-transparent min-[375px]:block p-2 text-2xl font-satoshiBlack">100xDevs</div>
        </div>
        <div className="md:flex lg:flex justify-normal m-2 mt-2 hidden ">
          <div className="py-2 px-2 m-2 text-neutral-50 mt-2">
            <Moon />
          </div>
          <div className=" py-4 pt-3 px-4 rounded-md bg-slate-50 text-black m-1 text-sm h-[75%] hover:cursor-pointer">
            Login
          </div>
          <div className="py-1 pt-3 px-4 mr-20 rounded-md text-neutral-50 bg-gradient-to-b from-blue-400 to-blue-700 m-1 text-sm h-[75%] hover:cursor-pointer">
            Join Now
          </div>
        </div>
      </div>
  );
}
