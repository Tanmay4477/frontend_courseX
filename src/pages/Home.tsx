import Navbar from "../components/Navbar";
import Front from "../components/Front";
import ImageLine from "../components/ImageLine";

export default function Home(){
    return (
        <div className="bg-black ">
            <Navbar />
            <Front />
            <ImageLine />
        </div>
    )
}