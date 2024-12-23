import Navbar from "../components/Navbar";
import Front from "../components/Front";
import ImageLine from "../components/ImageLine";
import DownloadAppCard from "../components/DownloadAppCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Front />
      <ImageLine />
      <DownloadAppCard />
      <Footer />
    </div>
  );
}
