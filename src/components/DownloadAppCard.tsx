import { Download } from "lucide-react";
import { Sparkles } from "lucide-react";

export default function DownloadAppCard() {
  return (
    <div className="container">
      <div className="rounded-3xl bg-gradient-to-b from-blue-400 to-blue-700 m-8 p-8 relative overflow-hidden h-[75vh] md:h-[45vh]">
        <div className="w-[80%] peer">
          <div className="text-3xl text-slate-100	font-semibold">
            Every developer deserves to be a great engineer, a 100xEngineer!
          </div>
          <div className="text-1xl text-slate-100 pt-2">
            Give yourself the power you deserve with a 100xdevs today!
          </div>
          <div className="mt-4 text-sm flex max-w-[50%] space-x-4">
            <button className="w-full flex justify-center items-center bg-white place-content-center py-2 rounded-md space-x-1">
              <Download className="text-xs" />
              <div>Download App</div>
            </button>
            <button className="w-full flex justify-center items-center bg-black text-slate-100 place-content-center py-2 rounded-md space-x-1">
              <Sparkles className="text-xs" />
              <div className="text-slate-100">Join Now</div>
            </button>
          </div>
        </div>
        <img
          className="absolute w-[80%] transition-all duration-300 md:right-6 md:w-[30%] animate-bounce-slow"
          src="/mockup.png"
          alt="harkirat singh app"
        />
      </div>
    </div>
  );
}
