import Footer from "../components/Home/Footer";
import CTA from "../components/Home/CTA"
import Marquee from "../components/Home/Marquee"
import Hero from "../components/Home/Hero"
import Navbar from "../components/Home/Navbar"
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => {    
      if (prevIsDark) { // Equivalent to `isDark === false`
        const agree = window.confirm("Dark theme is so sexy, do not change it");
        if (agree) {
          return true;
        } else {
          const secondChance = window.confirm("You have to agree, no other option");
          if (secondChance) {
            return true;
          } else {
            const thirdChance = window.confirm("Agree, you little boy!");
            if (thirdChance) {
              return true;
            } else {
              return true; 
            }
          }
        }
      }
    
      return !prevIsDark; // Default toggle
    });
  }
 
  return (
    <div className="hover:scroll-smooth scroll-auto mx-auto max-w-[1600px] px-4 sm:px-16 font-satoshi bg-gradient-to-b from-[black] to-[#141F3A]">
      <Navbar toggleTheme={toggleTheme} />
      <Hero />
      <Marquee /> 
      <CTA />
      <Footer />
    </div>
  );
}
