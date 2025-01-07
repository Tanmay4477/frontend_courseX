// import CourseComponent from "../components/Course/CourseComponent";
import { useEffect, useState } from "react";
import {CourseType} from "./Courses"
import axios from "axios";


export default function Purchased() {
    const [purchasedCourse, setPurchasedCourse] = useState<CourseType>()

    useEffect(() => {
        const fetch = async () => {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${process.env.BACKEND_URL}/purchased`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }) 
            console.log(response);
            setPurchasedCourse(response.data.data);
            console.log("purchased courses", purchasedCourse);
        }
        fetch();
    }, [])
    return (
        <div className="bg-black flex justify-normal gap-2">
            {/* <CourseComponent  /> */}
        </div>
    )
}