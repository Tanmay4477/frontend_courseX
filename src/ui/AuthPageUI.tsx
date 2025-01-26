import { motion } from "framer-motion";
import { LoginComponentProps, schema, LoginFormData } from "@/pages/AuthPage";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


export const AuthPageUI: React.FC<LoginComponentProps> = ({buttonName}) => {
    const [showPassword , setShowPassword] = useState(true);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, trigger } = useForm<LoginFormData>({
        resolver: zodResolver(schema),
    });

    const addUser = async (data: LoginFormData) => {
        toast.loading('Signin in')
        
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        try {
            const response = await axios.post("http://localhost:3000/api/v1/login", {
                username: data.email,
                password: data.password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response);
            toast.success("Signed in");
            await new Promise((resolve) => setTimeout(resolve, 1500));
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            toast.error("Invalid credentials, try again!")
            // reset();
        }
    
        // axios request or our logic depends on us

        // toast.promise(promise, {
        //     loading: 'Signin in',
        //     success: 'Signed in',
        //     error: 'Invalid credentials, try again!',
        // });

    }

    const { mutateAsync: loginUserMutation } = useMutation({
        mutationFn: addUser,
        // retry: false,   
    });

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit: SubmitHandler<LoginFormData> = async (data: LoginFormData) => {     

        try {
            await loginUserMutation(data);
        }
        catch (error) {
            console.log( "error is pressent", error);
        }
    }
    
    return (        
        <div className="fixed inset-0 h-screen w-screen flex justify-center items-center ">
            <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 , ease:"circOut" }}
        >
                <div className="rounded-lg shadow-md w-full max-w-screen-sm h-[425px] p-8 flex flex-col gap-5 bg-neutral-100 dark:bg-[#161820]">
                    <div className="">
                        <div className="text-4xl font-satoshiBold text-center">
                            <span>Welcome to</span>
                            {" "}
                            <span className="text-primary font-satoshiBlack">100xDevs</span>
                        </div>
                        <div className="text-center text-lg tracking-tight text-gray-400">{buttonName} to access paid content!</div>
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="py-6 flex flex-col gap-4">
                            <div className="text-sm flex flex-col gap-1">
                                <label>Email</label>
                                <input 
                                    type="text" 
                                    placeholder="name@email.com" 
                                    className="h-10 w-full rounded-md p-2 dark:bg-[#2C374E]" 
                                    {...register("email", {
                                        required: "Email is required",
                                    })}
                                    onBlur={() => trigger("email")}
                                    />
                                    {errors.email && 
                                        <p className="text-red-500">{errors.email.message}</p>
                                    }
                            </div>
                            <div className="text-sm flex flex-col gap-1">
                                <label>Password</label>
                                <div className="h-10 w-full rounded-md dark:bg-[#2C374E] flex justify-between items-center">
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        placeholder="•••••••••" 
                                        className="dark:bg-[#2C374E] p-2 rounded-md w-full" 
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: 8,
                                        })}
                                        onBlur={() => trigger("password")}
                                        />
                                    <span onClick={handlePasswordVisibility} className="p-3 opacity-45">{showPassword ? <FaEyeSlash/>: <FaEye/>}</span></div>
                                    { errors.password && (
                                        <p className="text-red-500">{errors.password.message}</p>
                                    )}
                                </div>
                            </div>
                            <button type="submit" className="bg-gradient-to-b from-blue-400 to-blue-600 h-10 w-full rounded-md flex items-center justify-center text-md">{buttonName}</button>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}
