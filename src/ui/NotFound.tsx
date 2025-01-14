import { useSpeedAnimate } from "@/context/SpeedAnimation";

const NotFoundUI = () => {
    const { animateHandler} = useSpeedAnimate(); 
    return (
            <div className="w-screen h-screen fixed inset-0 flex flex-col justify-center items-center gap-4">
                <div className="text-3xl md:text-6xl font-satoshiBold">404- Page Not Found</div>
                <div className="text-md text-neutral-500 pb-4">Oops! The page you're looking for doesn't exist.</div>
                <button className="bg-black dark:bg-white text-white dark:text-black h-10 px-6 rounded-lg text-sm" onClick={animateHandler}>
                    Go Back Home
                </button>
            </div>
    )
}

export default NotFoundUI;