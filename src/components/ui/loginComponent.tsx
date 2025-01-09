import { motion } from "framer-motion";

interface LoginComponentProps {
    buttonName: string;
}

export const LoginComponent: React.FC<LoginComponentProps> = ({buttonName}) => {
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 , ease:"circOut" }}
        >
            <div className="rounded-lg border shadow-md w-[450px] h-96 p-8 flex flex-col gap-5">
                <div className="">
                    <div className="text-4xl font-satoshiBold text-center">
                        <span>Welcome to</span>
                        {" "}
                        <span className="text-primary font-satoshiBlack">100xDevs</span>
                    </div>
                    <div className="text-center text-lg tracking-tight text-gray-400">{buttonName} to access paid content!</div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="text-sm flex flex-col gap-1">
                        <div>Email</div>
                        <input type="text" placeholder="name@email.com" className="h-10 w-full rounded-md p-2"/>
                    </div>
                    <div className="text-sm flex flex-col gap-1">
                        <div>Password</div>
                        <input type="text" placeholder="........" className="h-10 w-full rounded-md p-2"/>
                    </div>
                </div>
                
                <button className="bg-gradient-to-b from-blue-400 to-blue-600 h-10 w-full rounded-md flex items-center justify-center text-md">{buttonName}</button>
            </div>
        </motion.div>
    )
}
