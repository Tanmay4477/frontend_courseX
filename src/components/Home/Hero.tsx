export default function Hero() {
    return (
        <div>
            <div className="mx-auto flex-col justify-center gap-4 w-full">
                <div>
                    <span className="text-5xl bg-gradient-to-b from-blue-400 to-blue-700 text-transparent bg-clip-text font-satoshiBlack">100xDevs,</span>
                    <span className="text-5xl text-white/80  font-satoshiBlack">because 10x ain't enough!</span>
                </div>
                <div className="text-white/80">A beginner-friendly platform for mastering programming skills.</div>
                <div className="flex justify-normal items-center gap-4 text-sm">
                    <div className="rounded-lg text-white bg-gradient-to-b from-blue-400 to-blue-700 px-8 py-3">Explore Courses</div>
                    <div className="rounded-lg text-black bg-white px-8 py-3">Explore Notes</div>
                </div>
            </div>
        </div>
    )
}