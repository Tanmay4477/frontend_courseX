import mockup from "../assets/mockup.png";
import { Download } from "lucide-react";
import { Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <>
      <div className="h-[75vh] bg-gradient-to-b from-blue-400 to-blue-700 rounded-3xl p-2 border-b text-[#FFFFFF] overflow-hidden md:flex md:justify-between md:max-h-96 md:mx-20">
        <div className="px-6 pt-6">
          <div>
            <div className="text-[#FFFFFF] text-4xl font-satoshiBold tracking-tighter">
              Every developer deserves to be a great engineer, a 100xEngineer!
            </div>
            <div className="text-[#FFFFFF] text-lg p-2 pr-4">
              Give yourself the power you deserve with a 100xdevs today!
            </div>
          </div>
          <div className="space-y-2 md:flex">
            <div className="bg-[#FFFFFF] text-black w-full rounded-lg flex justify-center">
              <button className="flex justify-center items-center py-2 space-x-2">
                <Download />
                <div>Download App</div>
              </button>
            </div>
            <div className="bg-[#26395A] text-[#FFFFFF] w-full rounded-lg flex justify-center items-center">
              <button className="flex justify-center items-center py-2 space-x-2">
                <Sparkles />
                <div>Join Now</div>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 h-[90vh] flex items-center justify-center mt-2">
          <div className="animate-bounce-slow">
            <img
              className="w-[90%] h-[90vh] rotate-2"
              src={mockup}
              alt="harkirat mobile app"
            />
          </div>
        </div>
      </div>
    </>
  );
}
