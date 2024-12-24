import harkirat from "../assets/harkirat.jpg";
import { FaGithub, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";



export default function Footer() {
  return (
    <div className="m-10 text-slate-100">
      <div className="flex justify-normal space-x-2">
      <img src={harkirat} alt="Logo" className="size-16 rounded-full"/>
        <div className="space-x-1">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 font-bold text-4xl">100xDevs</div>
          <div>because 10x ain't enough.</div>
        </div>
      </div>

      <div>
        <div>Follow us</div>
        <div className="flex justify-normal space-x-2 text-md">
          <div className="bg-[#131A2E] rounded-md p-2"><FaXTwitter size={30}/></div>
          <div className="bg-[#131A2E] rounded-md p-2"><FaInstagram size={30}/></div>
          <div className="bg-[#131A2E] rounded-md p-2"><FaYoutube size={30}/></div>
          <div className="bg-[#131A2E] rounded-md p-2"><FaGithub size={30}/></div>

        </div>
      </div>
    </div>
  );
}
