import mobile from "../../assets/mockup.png"
import { RiDownload2Fill } from "react-icons/ri";
import { LuSparkles } from "react-icons/lu";


export default function CTA() {
    return (
        <div>
            <div className="rounded-[24px] bg-gradient-to-b from-[#5CA2F8] to-[#1F4FD8]">
                <div className="p-8 max-h-[565px] overflow-hidden md:max-h-[325px]">
                    <div className="grid gap-3 md:grid-cols-3 md:justify-items-start h-screen">
                        <div className="md:col-span-2 md:col-start-1 flex flex-col gap-3" >
                            <div className=" text-3xl font-satoshiBold tracking-tighter text-white md:text-4xl w-full">Every developer deserves to be a great engineer, a 100xEngineer!</div>
                            <div className=" text-lg text-white/80 md:text-xl">Give yourself the power you deserve with a 100xdevs today!</div>
                            <div className=" flex flex-col gap-2 md:flex-row md:justify-normal">
                                <div className="flex w-full justify-center items-center gap-2 h-10 rounded-lg text-sm bg-white md:max-w-40">
                                    <RiDownload2Fill />
                                    <div>Download App</div>
                                </div>
                                <div className="flex w-full justify-center items-center gap-2 h-10 rounded-lg text-sm bg-[#1F2937] text-white md:max-w-44">
                                    <LuSparkles />
                                    <div>Join Now</div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-1 md:col-start-3 rotate-3 animate-bounce-slow">
                            <img src={mobile} alt="harkirat app" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}