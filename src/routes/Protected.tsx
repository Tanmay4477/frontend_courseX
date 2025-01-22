import { useAuthContext } from "@/context/AuthContext"
import { useEffect, useState } from "react";
import UserAPI from "@/api/UserAPI";
import { Navigate, Outlet } from "react-router-dom";

export default function Protected() {
    const {data, login} = useAuthContext();
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const verifyCookies = async () => {
        try {
            const response = await UserAPI.verifyCookie(); 
            if(response.data.valid === true && response.status === 200){
                const userData = {
                    name: "100xDev"
                }
                login(userData);
            } 
            else {
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if(!data) {
            verifyCookies();
        }
        else {
            setIsLoading(false);
        }
    }, [data])

    // useEffect(() => {
    //     if(!isLoading && !data) {
    //         <Navigate to="/signin" />
    //     }
    // }, [isLoading, data])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    if(!data) {
        return <Navigate to="signin" />
    }

    return <Outlet />    
};


