import Navbar from "../components/Navbar";
import Front from "../components/Front";
import ImageLine from "../components/ImageLine";
import CTA from "../components/CTA"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black font-satoshi">
      <Navbar />
      <Front />
      <ImageLine />
      <CTA />
      <Footer />
    </div>
  );
}
