import adhoc from "@/assets/adhoc.jpeg";
import devops from "@/assets/devops.png";
import dsa from "@/assets/dsa.jpeg";
import webdev from "@/assets/web_dev.png";
import web3 from "@/assets/web3.png";

export default function MarqueeUI() {
  return (
    <div className="py-8">
      <div className="mask-gradient h-56 max-h-56 w-screen overflow-x-hidden flex items-center justify-normal gap-4 relative">
        <div className="animate-marquee whitespace-nowrap flex gap-4">
          <span>
            <img
              src={adhoc}
              alt="adhoc"
              className="min-w-96 h-56 rounded-[16px] w-full"
            />
          </span>
          <span>
            <img
              src={devops}
              alt="devops course"
              className="min-w-96 h-56 rounded-[16px] w-full"
            />
          </span>
          <span>
            <img
              src={dsa}
              alt="dsa course"
              className="min-w-96 h-56 rounded-[16px] w-full"
            />
          </span>
          <span>
            <img
              src={webdev}
              alt="web dev course"
              className="min-w-96 h-56 rounded-[16px] w-full"
            />
          </span>
          <span>
            <img
              src={web3}
              alt="web3 course"
              className="min-w-96 h-56 rounded-[16px] w-full"
            />
          </span>
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-4 pl-2">
          <span>
            <img
              src={adhoc}
              alt="adhoc"
              className="min-w-96 h-56 rounded-[16px] w-full"
            />
          </span>
          <span>
            <img
              src={devops}
              alt="devops course"
              className="min-w-96 h-56 rounded-[16px] w-full"
            />
          </span>
          <span>
            <img
              src={dsa}
              alt="dsa course"
              className="min-w-96 h-56 rounded-[16px] w-full"
            />
          </span>
          <span>
            <img
              src={webdev}
              alt="web dev course"
              className="min-w-96 h-56 rounded-[16px] w-full"
            />
          </span>
          <span>
            <img
              src={web3}
              alt="web3 course"
              className="min-w-96 h-56 rounded-[16px] w-full"
            />
          </span>
        </div>
      </div>
    </div>
  );
}