import { motion } from "framer-motion";
import { LoginComponentProps } from "@/pages/AuthPage";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Popup } from "./Popup";
import { BsEmojiGrimace } from "react-icons/bs";



export const AuthPageUI: React.FC<LoginComponentProps> = ({buttonName, onSubmit}) => {
    const [eye, setEye] = useState("password");
    const [icon, setIcon] = useState(<FaEye size={20}/>)
    const { register, handleSubmit, formState: { errors } } = useForm();


    const eyeClick = () => {
        if(eye === "password") {
            setEye("text");
            setIcon(<FaEye size={20}/>)
        }
        else {
            setEye("password");
            setIcon(<FaEyeSlash size={20}/>)
        }
    }

    return (        
        <div className="fixed inset-0 h-screen w-screen flex justify-center items-center ">
            <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 , ease:"circOut" }}
        >
                <div className="rounded-lg  shadow-md w-full max-w-screen-sm h-[400px] p-8 flex flex-col gap-5 bg-neutral-100 dark:bg-[#161820]">
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
                                        required: true,
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Entered all does not match email format"
                                        }
                                    })}/>
                            </div>
                            {errors.email && errors.email.type==="required" && (
                                <div className=""><Popup text="Email is required!" icon={<BsEmojiGrimace />} /></div>
                            )}
                            <div className="text-sm flex flex-col gap-1">
                                <label>Password</label>
                                <div className="h-10 w-full rounded-md dark:bg-[#2C374E] flex justify-between items-center">
                                    <input 
                                        type={eye} 
                                        placeholder="•••••••••" 
                                        className="dark:bg-[#2C374E] p-2 rounded-md w-full" 
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 12,
                                            
                                        })}/>
                                    <span onClick={eyeClick} className="p-3 opacity-45">{icon}</span></div>
                            </div>
                        </div>
                        <button type="submit" className="bg-gradient-to-b from-blue-400 to-blue-600 h-10 w-full rounded-md flex items-center justify-center text-md">{buttonName}</button>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}
