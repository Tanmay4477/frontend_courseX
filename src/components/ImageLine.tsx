import adhoc from "../assets/adhoc.jpeg"
import devops from "../assets/devops.png"
import dsa from "../assets/dsa.jpeg";
import web_dev from "../assets/web_dev.png";
import web3 from "../assets/web3.png";

export default function ImageLine() {
    return (
        <div className="overflow-x-hidden mx-16 mask-gradient">
            <div className="flex animate-marquee space-x-6 m-8">
                <img src={web3} alt="web3 course" className="h-[216px] rounded-lg shadow-2xl"/>
                <img src={adhoc} alt="adhoc course" className="h-[216px] rounded-lg"/>
                <img src={web_dev} alt="web development course" className="h-[216px] rounded-lg"/>
                <img src={dsa} alt="dsa course" className="h-[216px] rounded-lg"/>
                <img src={devops} alt="devops course" className="h-[216px] rounded-lg"/>

                <img src={web3} alt="web3 course" className="h-[216px] rounded-lg"/>
                <img src={adhoc} alt="adhoc course" className="h-[216px] rounded-lg"/>
                <img src={web_dev} alt="web development course" className="h-[216px] rounded-lg"/>
                <img src={dsa} alt="dsa course" className="h-[216px] rounded-lg"/>
                <img src={devops} alt="devops course" className="h-[216px] rounded-lg"/>
            </div>
        </div>
    )
}