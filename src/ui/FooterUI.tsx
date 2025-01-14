import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import harkirat from "@/assets/harkirat.jpg"


export default function FooterUI() {
    return (
        <footer>
            <div className="py-10">
                <div className="">
        
                    <div className="grid grid-cols-4 gap-y-12 md:grid-cols-3 md:grid-rows-2 md:justify-items-start md:gap-y-0">
                        <div className="flex justify-normal gap-1 col-span-full md:col-span-1 md:row-span-1">
                            <div className="">
                                <img src={harkirat} className="rounded-full h-16 w-16" />
                            </div>
                            <div className=" -space-y-2">
                                <div className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tighter text-4xl font-satoshiBold ">
                                    100xDevs
                                </div>
                                <div className="text-lg">
                                    because 10x ain't enough.
                                </div>
                            </div>
                            
                        </div>

                        <div className="col-span-full md:col-span-1 md:row-span-1 md:row-start-2">
                            <div className="">Follow us</div>
                            <div className="flex justify-normal items-center gap-3">
                                <div className="bg-[#10192B] text-[#F9FAFB] rounded-lg p-1 text-3xl"><FaXTwitter /></div>
                                <div className="bg-[#10192B] text-[#F9FAFB] rounded-lg p-1 text-3xl"><FaInstagram /></div>
                                <div className="bg-[#10192B] text-[#F9FAFB] rounded-lg p-1 text-3xl"><CiYoutube /></div>
                                <div className="bg-[#10192B] text-[#F9FAFB] rounded-lg p-1 text-3xl"><FaGithub /></div>
                            </div>
                        </div>

                        <div className="col-span-full md:col-span-1 md:row-span-1 md:justify-self-center">
                            <div className="flex flex-col gap-2">
                                <div className="tracking-tighter text-lg">100x Links</div>
                                <div className="flex flex-col gap-1 tracking-tighter opacity-50">
                                    <div className="">Projects</div>
                                    <div className="">Report</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full md:col-span-1 md:row-span-1 md:justify-self-center">
                            <div className="flex flex-col gap-2">
                                <div className=" tracking-tighter text-lg">100x Legal</div>
                                <div className="flex flex-col gap-1 tracking-tighter opacity-50">
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