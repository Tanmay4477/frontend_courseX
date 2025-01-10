import Navbar from "@/components/HomePage/Navbar"
import { SpeedAnimationProvider } from "@/context/SpeedAnimation"
import { HomeLayout } from "@/Layout/HomeLayout"

export default function Home() {
    return (
            <SpeedAnimationProvider>
                <HomeLayout>
                    <Navbar />
                </HomeLayout>
            </SpeedAnimationProvider>
    )
}