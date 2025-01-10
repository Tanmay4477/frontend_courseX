import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import the CSS for styling
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const TopBarHandler = ({children}: {children: React.ReactNode}) => {
    const location = useLocation();
    console.log("Lets see what exactly is location", location);

    NProgress.configure({
        showSpinner: false,
        speed: 200,        
        easing: 'ease',
        trickle: false,
    });
    

    useEffect(() => {
        NProgress.start();

        const timer = setTimeout(() => {
            NProgress.done();
        }, 1000)

        return () => {
            clearTimeout(timer);
            NProgress.done();
        }

    }, [location]) 

    return (
        <div>
            {children}
        </div>
    )
}