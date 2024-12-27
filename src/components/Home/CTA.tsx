import mobile from "../../assets/mockup.png"
import { RiDownload2Fill } from "react-icons/ri";
import { LuSparkles } from "react-icons/lu";



export default function CTA() {
    return (
        <div>
            <div className="rounded-[24px] bg-gradient-to-b from-[#5CA2F8] to-[#1F4FD8]">
                <div className="p-8 max-h-[565px] overflow-hidden md:max-h-[400px]">
                    <div className="">
                        <div className="1 text-3xl font-satoshiBold tracking-tighter text-white md:text-4xl w-full ">Every developer deserves to be a great engineer, a 100xEngineer</div>
                        <div className="2 text-lg text-white/80 md:text-xl">Give yourself the power you deserve with a 100xdevs today!</div>
                        <div className="3 flex flex-col gap-2 md:flex-row md:justify-normal">
                            <div className="flex w-full justify-center items-center gap-2 h-10 rounded-lg text-sm bg-white ">
                                <RiDownload2Fill />
                                <div>Download App</div>
                            </div>
                            <div className="flex w-full justify-center items-center gap-2 h-10 rounded-lg text-sm bg-[#1F2937] text-white">
                                <LuSparkles />
                                <div>Join Now</div>
                            </div>
                        </div>
                        <div className="4 rotate-3">
                            <img src={mobile} alt="harkirat app" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}