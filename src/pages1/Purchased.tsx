// import CourseComponent from "../components/Course/CourseComponent";
import { useEffect, useState } from "react";
import {CourseType} from "./Courses"
import axios from "axios";
import CourseComponent from "../components/Course/CourseComponent";


export default function Purchased() {
    const [purchasedCourse, setPurchasedCourse] = useState<CourseType[]>([])

    useEffect(() => {
        const fetch = async () => {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/purchased`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const courseIdArray = response.data.courses;
            courseIdArray.map(async (id: string) => {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/courses/${id}`);
                console.log("response", response.data.data);
                setPurchasedCourse((prevPurchasedCourse) => [...prevPurchasedCourse, response.data.data]);
            });
        }
        fetch();
    }, [])
    return (
        <div className="bg-black flex justify-normal gap-2">
            {purchasedCourse.map((course) => {
                return <div key={course._id}><CourseComponent id={course._id} title={course.title} imageUrl={course.imageUrl} price={course.price}/></div>
            })}
        </div>
    )
}