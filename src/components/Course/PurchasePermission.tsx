import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { useState } from "react";

interface purchaseInterface {
    id: string;
    setPurchase: Dispatch<SetStateAction<boolean>>;
}

export const PurchasePermission: React.FC<purchaseInterface> = ({ id, setPurchase }) => {

    const [purchaseMessage, setPurchaseMessage] = useState<string>("");
    const purchaseHandler = async () => {
        const token = localStorage.getItem("token");
        try {
            console.log("ftkvnkfv");
            const response = await axios.post(`http://localhost:3000/api/v1/purchase/${id}`, {}, {headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        }
        );
            console.log("data", response);  
            console.log("msg", response.data.msg);
            setPurchaseMessage(response.data.msg); 
            setTimeout(() => {
                setPurchaseMessage("");
                setPurchase(false)
            }, 1000)
        } 
        catch (error) {
            console.log("error", error);
            return
        }
    }

    const noHandler = () => {
        setPurchase(false);
    }

    try {
        return (
            <div className="flex flex-col relative gap-y-2 items-center justify-center">
                <div className="">
                    {purchaseMessage && <div className="text-md text-green-500 rounded-md h-5 p-4">{purchaseMessage}✅</div>}
                </div>
                <div className="flex flex-col gap-1 border border-black p-2 rounded-lg bg-black max-w-60">
                    <div className="text-white">Do you want to purchase?</div>
                    <div className="flex justify-around">
                        <button onClick={purchaseHandler} className="bg-green-500 rounded-md w-12">Yes</button>
                        <button onClick={noHandler} className="bg-red-500 rounded-md w-12">No</button>
                    </div>
                </div>
            </div>
        )
    }
    catch(error) {
        console.log("error")
        return;
    }
}