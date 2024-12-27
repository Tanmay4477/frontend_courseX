import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";


export default function Footer() {
    return (
        <footer>
            <div className="py-10">
                <div className="">
        
                    <div className="grid grid-cols-4 gap-y-12 md:grid-cols-3">
                        <div className="flex justify-normal gap-1 items-center col-span-full">
                            <div className="">
                                <img src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" className="rounded-full h-16 w-16" />
                            </div>
                            <div className=" -space-y-2">
                                <div className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tighter text-4xl font-satoshiBold ">
                                    100xDevs
                                </div>
                                <div className="text-[#F9FAFB] txt-lg">
                                    because 10x ain't enough.
                                </div>
                            </div>
                            
                        </div>

                        <div className="col-span-full ">
                            <div className="text-[#F9FAFB]">Follow us</div>
                            <div className="flex justify-normal items-center gap-3">
                                <div className="bg-blue-500/10 text-[#F9FAFB] rounded-lg p-1 text-3xl"><FaXTwitter /></div>
                                <div className="bg-[#10192B] text-[#F9FAFB] rounded-lg p-1 text-3xl"><FaInstagram /></div>
                                <div className="bg-[#10192B] text-[#F9FAFB] rounded-lg p-1 text-3xl"><CiYoutube /></div>
                                <div className="bg-[#10192B] text-[#F9FAFB] rounded-lg p-1 text-3xl"><FaGithub /></div>
                            </div>
                        </div>

                        <div className="col-span-full md:col-span-1">
                            <div className="flex flex-col gap-2">
                                <div className="text-[#F9FAFB] tracking-tighter text-lg">100x Links</div>
                                <div className="flex flex-col gap-1 tracking-tighter">
                                    <div className="text-[#BDBEC1]">Projects</div>
                                    <div className="text-[#BDBEC1]">Report</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full md:col-span-1">
                            <div className="flex flex-col gap-2">
                                <div className="text-[#F9FAFB] tracking-tighter text-lg">100x Legal</div>
                                <div className="flex flex-col gap-1 tracking-tighter text-[#BDBEC1]">
                                    <div>Terms & Conditions</div>
                                    <div>Privacy Policy</div>
                                    <div>Refund & Cancellation</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}