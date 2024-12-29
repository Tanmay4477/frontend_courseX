import Footer from "../components/Home/Footer";
import CTA from "../components/Home/CTA"
import Marquee from "../components/Home/Marquee"
import Hero from "../components/Home/Hero"
import Navbar from "../components/Home/Navbar"

export default function Home() {
  return (
    <div className="hover:scroll-smooth scroll-auto mx-auto max-w-[1600px] px-4 sm:px-16 font-satoshi bg-gradient-to-b from-[black] to-[#141F3A]">
      <Navbar />
      <Hero />
      <Marquee /> 
      <CTA />
      <Footer />
    </div>
  );
}
