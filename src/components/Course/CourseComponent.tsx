import { useNavigate } from "react-router-dom"

interface propsType {
    id: string,
    title: string,
    imageUrl: string,
    price: number,
}


export default function CourseComponent({id, title, imageUrl, price}:propsType) {

    let navigate = useNavigate();

    const handleClick = () => {
        console.log(id)
        navigate(`/course/${id}`)
    }
    return (
        <div className="bg-white max-w-sm rounded-lg flex flex-col p-2 border-2 border-indigo-500">
            <div className="">
                <img src={imageUrl} alt={title} className="rounded-lg h-48 w-96"/>
            </div>
            <div className="max-w-sm">{title}</div>
            <div className="flex justify-between">
                <div>₹{price}</div>
                <div className="text-green-400">69.69% off</div>
            </div>
            <div className="flex bg-blue-500 h-10 max-w-36 rounded-lg justify-center items-center content-center self-center">
                <button onClick={handleClick} className="px-5 py-4 text-white text-center" >View Details</button>
            </div>
        </div>
    )
}