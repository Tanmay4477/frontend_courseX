import { HomeLayout } from "@/Layout/HomeLayout";
import { AuthPageUI } from "@/ui/AuthPageUI";
import { Toaster } from "sonner";
import z from "zod";


export const schema = z.object({
    email: z.string().nonempty("Field should not be empty").email("It should be a valid email"),
    password: z.string().min(6, "It should be of minimum 6 characters").max(12, "It is too big").regex(/^\S*$/, "Password cannot contain spaces")
})

export type LoginFormData = z.infer<typeof schema>;

export interface LoginComponentProps {
    buttonName: string;
}

export default function AuthPage({buttonName}: {buttonName: string}) {
    return (
        <HomeLayout>  
            <Toaster richColors/>
            <AuthPageUI buttonName={buttonName}/>          
        </HomeLayout>
    )
}