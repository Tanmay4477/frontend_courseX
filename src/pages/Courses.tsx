// import CourseComponent  from "../components/Course/CourseComponent";
import axios from "axios";
import { useEffect, useState } from "react";

export const Courses = () => {
    const [courses, setCourses] = useState("");

    useEffect(() => {
        const fetch = async() => {
            const response = await axios.get("http://localhost:3000/api/v1/courses");
            console.log(response.data.data);
            setCourses(response.data.data);
        }
        fetch();
    }, [courses])
    return (
        <div className="">
            {/* <CourseComponent /> */}
        </div>
    )
}

export default Courses;