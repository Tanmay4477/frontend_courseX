// import { IconType } from "react-icons"
import { useEffect, useState } from "react";

export const Popup = ({text, icon}: {text: string, icon: React.ReactNode}) => {
    const [show, setShow] = useState(false);



    useEffect(() => {
        setShow(true)
        const wait = setTimeout(() => {
                setShow(false)
            }, 1000)
        return () => clearTimeout(wait)
    }, [])

    return (
        <>
        {show && (
            <div className="text-black bg-white h-3 w-56 absolute bottom-0 right-0 py-4 px-2 flex justify-normal gap-1 rounded-lg m-4 items-center">
                <span>{icon}</span>
                <span>{text}</span>
            </div>
        )}
        </>
    )
} 