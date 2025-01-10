import { NavbarUI } from "@/ui/NavbarUI"; 
import { useNavigate } from "react-router-dom";


export default function Navbar() {

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/signin")
    };
    const navigateToSignup = () => {
        navigate("/signup")
    }

    return (
        <div>
            <NavbarUI navigateToLogin={navigateToLogin} navigateToSignup={navigateToSignup}/>
        </div>
    )
}