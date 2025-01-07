import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PurchasePermission } from "./PurchasePermission"

interface idType {
    id: string
}

interface CourseInterface {
    _id: string,
    imageUrl: string,
    price: number,
    title: string,
    description: string
}

export const SingleCourse = ({id}: idType) => {
    const [course, setCourse] = useState<CourseInterface>();
    const [purchase, setPurchase] = useState(false);
    let navigate = useNavigate();

    const buyHandler = () => {
        console.log("fbvdk");
        setPurchase(true);
    }

    const dashboardHandler = () => {
        navigate("/purchased")
    }

    useEffect(() => {
        const fetch = async() => {
            const response = await axios.get("http://localhost:3000/api/v1/courses/"+id);
            console.log(response.data.data);
            setCourse(response.data.data);
            console.log(course);
        }
        fetch();
    }, [id])

    return (
        <div className="w-full">
            {course ? (
                <div className="border-2 border-purple-500 rounded-[20px] bg-white p-4 flex flex-col gap-2" >
                    {purchase && <div><PurchasePermission id={id} setPurchase={setPurchase}/></div>}
                    <img src={course.imageUrl} alt={course.title} className="h-56 w-96 rounded-[20px] self-center"/>
                    <div className="flex flex-col gap-2 p-2 self-center">
                        <div className="text-sm text-gray-400">PRICE</div>
                        <div className="flex justify-between">
                            <div className="font-extrabold">₹{course.price}</div>
                            <div className="text-green-400">69.69% off</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Choose Currency:</div>
                            <div>INR</div>
                        </div>
                        <div className="text-center">{course.description}</div>
                        <button onClick={buyHandler} className="rounded-[20px] bg-blue-500 h-10 text-center self-center w-80 py-2 text-white">Buy Now</button>
                        <button onClick={dashboardHandler} className="rounded-[20px] bg-blue-500 h-10 text-center self-center w-80 py-2 text-white">View Purchased Course</button>
                    </div>
                </div>
            ): (
                <div> Loading... </div>
            )}
        </div>
    );
}
