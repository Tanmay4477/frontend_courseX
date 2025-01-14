import {Marquee} from "@/components/HomePage/Marquee"
import { HeroSection } from "@/components/HomePage/HeroSection"
import { CTASection } from "@/components/HomePage/CTASection"
import Footer from "@/components/HomePage/Footer"
import { HomeLayout } from "@/Layout/HomeLayout"


export default function Home() {
    return (
        <HomeLayout>           
            <HeroSection />
            <Marquee />
            <CTASection />
            <Footer />
        </HomeLayout>
    )
}