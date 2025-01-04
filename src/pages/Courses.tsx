import axios from "axios";
import { useEffect, useState } from "react";
import CourseComponent from "../components/Course/CourseComponent";

interface CourseType {
        "_id": string,
        "adminId": string,
        "users": string[],
        "title": string,
        "description": string,
        "price": number,
        "imageUrl": string,
        "videoUrls": string[],
        "createdAt": string,
        "updatedAt": string,
    }

export const Courses = () => {
    const [courses, setCourses] = useState<CourseType[]>();

    useEffect(() => {
        const fetch = async() => {
            const response = await axios.get("http://localhost:3000/api/v1/courses");
            console.log(response.data.data);
            setCourses(response.data.data);
        }
        fetch();
    }, [])

    return (
        <div className="bg-black flex justify-normal gap-2">
            {courses?.map((course) => (
                <CourseComponent title={course.title} imageUrl={course.imageUrl} price={course.price} />
            ))}
        </div>
    )
}

export default Courses;