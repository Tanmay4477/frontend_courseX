import { createContext, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface TopBarInterface {
    animate: boolean
    animateHandler: () => void
}


export const SpeedAnimationContext = createContext<TopBarInterface | null>(null);

export const SpeedAnimationProvider = ({children}: {children: React.ReactNode}) => {
    const [ animate, setAnimate ] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();

    const animateHandler = () => {
        setAnimate(true)
        navigate(location.pathname, { replace: true });
        setTimeout(() => {
            setAnimate(false);
        }, 200)
    }

    return (
        <SpeedAnimationContext.Provider value={{animate, animateHandler}}>
            {children}
        </SpeedAnimationContext.Provider>
    )
}

export const useSpeedAnimate = (): TopBarInterface => {
    const context = useContext(SpeedAnimationContext)
    if(context == null) {
        throw new Error("Component is not able to access the context, please wrap it inside")
    }
    return context;
}