export const HeroSectionUI = () => {
    return (
        <section>
            <div className="mx-auto flex flex-col items-center gap-8 w-full py-16">
                <div className="text-center max-w-screen-md">
                    <span className="text-5xl bg-gradient-to-b from-blue-400 to-blue-700 text-transparent bg-clip-text font-satoshiBlack md:text-7xl">100xDevs,</span>
                    {" "}
                    <span className="text-5xl text-neutral-600 dark:text-neutral-400 font-satoshiBlack md:text-7xl">because 10x ain't enough!</span>
                </div>
                <div className="text-neutral-700 dark:text-neutral-50 text-center text-lg md:text-xl">A beginner-friendly platform for mastering programming skills.</div>
                <div className="flex justify-normal items-center gap-4 text-sm">
                    <a href="https://harkirat.classx.co.in/new-courses" target="_blank" rel="noopener noreferrer" className="rounded-lg text-white bg-gradient-to-b from-blue-400 to-blue-700 px-8 py-3">Explore Courses</a>
                    <a href="https://projects.100xdevs.com/" target="_blank" rel="noopener noreferrer" className="rounded-lg px-8 py-3 text-neutral-200 bg-black dark:text-neutral-700 dark:bg-white">Explore Notes</a>
                </div>
            </div>
        </section>
    )
}