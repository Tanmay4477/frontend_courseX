import {SingleCourse} from "../components/Course/SingleCourse";
import { useParams } from "react-router-dom";

export default function Course() {
    const { id } = useParams();
    if(!id) return;
    
    return (
        <div className="flex justify-center">
                <SingleCourse id={id} />
        </div>
    )
}