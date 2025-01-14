import { HomeLayout } from "@/Layout/HomeLayout";
import { AuthPageUI } from "@/ui/AuthPageUI";

export interface LoginComponentProps {
    buttonName: string;
    onSubmit: () => void
}

export default function AuthPage({buttonName}: {buttonName: string}) {

    const onSubmit = () => {
        console.log("data")
        // isme saara axios ka logic daal do bc
    }

    return (
        <HomeLayout>  
            <AuthPageUI buttonName={buttonName} onSubmit={onSubmit}/>          
        </HomeLayout>
    )
}