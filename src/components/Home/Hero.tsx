export default function Hero() {
    return (
        <div>
            <div className="mx-auto flex flex-col items-center gap-8 w-full py-16">
                <div className="text-center max-w-screen-md">
                    <span className="text-5xl bg-gradient-to-b from-blue-400 to-blue-700 text-transparent bg-clip-text font-satoshiBlack md:text-7xl">100xDevs,</span>
                    {" "}
                    <span className="text-5xl bg-gradient-to-b from-white/90 to-white/60 text-transparent bg-clip-text font-satoshiBlack md:text-7xl">because 10x ain't enough!</span>
                </div>
                <div className="text-white/80 text-center text-lg md:text-xl">A beginner-friendly platform for mastering programming skills.</div>
                <div className="flex justify-normal items-center gap-4 text-sm">
                    <div className="rounded-lg text-white bg-gradient-to-b from-blue-400 to-blue-700 px-8 py-3">Explore Courses</div>
                    <div className="rounded-lg text-black bg-white px-8 py-3">Explore Notes</div>
                </div>
            </div>
        </div>
    )
}