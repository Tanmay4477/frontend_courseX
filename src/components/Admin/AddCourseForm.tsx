import { useState } from "react"
// import axios from "axios"

interface FormInterface {
    title: string,
    description: string,
    price: number | null,
    imageUrl: string
}

export const AddCourseForm = () => {
    const [formData, setFormData] = useState<FormInterface>({
        title: "",
        description: "",
        price: null,
        imageUrl: ""
    });

    const [errors, setErrors] = useState("");

    const validateForm = () => {

        if (!formData.title || formData.title.length < 1) {
            setErrors("Title is too short");
            return
        }
        else if (!formData.description || formData.description.length < 5) {
            setErrors("Description is too short");
            return
        }

        else if (!formData.price || isNaN(formData.price) || Number(formData.price) < 0) {
            setErrors("Price must be positive");
            return
        }

        else if(formData.imageUrl === "") {
            setErrors("Image is required")
            return
        }
        else {
            setErrors("");
        }
    }

    const handleSubmit = async(event: React.FormEvent<EventTarget>) => {
        event.preventDefault();

        validateForm();

         if(errors.length > 0) {
            return;
        }

        // await axios.post("http://localhost:3000/api/v1/admin/course", {
        //     title: formData.title,
        //     description: formData.description,
        //     price: formData.price,
        //     imageUrl: formData.imageUrl
        // });

        // axios request bhejo
    }

    return (
        <form className="bg-white rounded-lg p-8 max-w-md mx-auto border shadow-xl" onSubmit={handleSubmit}>
            <div className="text-2xl font-bold text-center">Add Course</div>

            <div>
                <label className="block">Title</label>
                <input className="w-full border rounded-md p-1" type="text" value={formData.title} onChange={(e) => setFormData({...formData, title:e.target.value})} required/>
            </div>
            <div>
                <label className="block">Description</label>
                <input className="w-full border rounded-md p-1" type="text" value={formData.description} onChange={(e) => setFormData({...formData, description:e.target.value})} required/>
            </div>
            <div>
                <label className="block">Price</label>
                <input className="w-full border rounded-md p-1" type="number" value={formData.price ?? ""}  onChange={(e) => setFormData({...formData, price:+e.target.value})} required/>
            </div>
            <div>
                <label className="block">Image Url</label>
                <input className="w-full border rounded-md p-1" type="text" value={formData.imageUrl} onChange={(e) => {setFormData({...formData, imageUrl: e.target.value})}} required/>
            </div>
            <div className="text-red-500">
                {errors && <div>{errors}</div>}
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600">
                Submit
            </button>
        </form>
    )
}