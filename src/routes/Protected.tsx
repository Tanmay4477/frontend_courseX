import { useAuthContext } from "@/context/AuthContext"
import { useEffect, useState } from "react";
import UserAPI from "@/api/UserAPI";
import { Navigate, Outlet } from "react-router-dom";

export default function Protected() {
    const {data, login} = useAuthContext();
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const verifyCookies = async () => {
        setIsLoading(true); 
        try {
            const response = await UserAPI.verifyCookie(); 
            if(response.data.valid === true && response.status === 200){
                const userData = {
                    name: "100xDev"
                }
                login(userData);
            } 
            else {
                <Navigate to="/signin" />
            }
        } catch (error) {
            console.log(error);
            <Navigate to="/signin"/>
        } finally {
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

    useEffect(() => {
        if(!isLoading && !data) {
            <Navigate to="/signin" />
        }
    }, [isLoading, data])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return <Outlet />    
};


