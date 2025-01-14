import { HomeLayout } from "@/Layout/HomeLayout";
import { AuthPageUI } from "@/ui/AuthPageUI";
import { toast, Toaster } from "sonner";
import z from "zod";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

export const schema = z.object({
    email: z.string().nonempty("Field should not be empty").email("It should be a valid email"),
    password: z.string().min(6, "It should be of minimum 6 characters").max(12, "It is too big")
})

export type LoginFormData = z.infer<typeof schema>;

export interface LoginComponentProps {
    buttonName: string;
    onSubmit: (data: any) => void
}

export default function AuthPage({buttonName}: {buttonName: string}) {
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit:SubmitHandler<LoginFormData> = (data: any) => {
        console.log(data);
    }

    return (
        <HomeLayout>  
            <Toaster richColors/>
            <AuthPageUI buttonName={buttonName} onSubmit={onSubmit}/>          
        </HomeLayout>
    )
}