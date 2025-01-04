import { useState } from "react"

interface FormInterface {
    title: string,
    description: string,
    price: number | null,
    imageUrl: File | undefined
}


export const AddCourseForm = () => {
    const [formData, setFormData] = useState<FormInterface>({
        title: "",
        description: "",
        price: null,
        imageUrl: undefined
    });

    const [errors, setErrors] = useState("");

    const validateForm = () => {

        if (!formData.title || formData.title.length < 1) {
            setErrors("Title is too short");
            return
        }
        if (!formData.description || formData.description.length < 5) {
            setErrors("Description is too short");
            return
        }

        if (!formData.price || isNaN(formData.price) || Number(formData.price) < 0) {
            setErrors("Price must be positive");
            return
        }

        if(formData.imageUrl === undefined) {
            setErrors("Image is required")
            return
        } else if(!["image/jpeg", "image/png"].includes(formData.imageUrl.type)) {
            setErrors("Image must be JPEG or PNG")
            return
        } else if(formData.imageUrl.size > 5 * 1024 * 1024) {
            setErrors("Image is too big, keep it less than 5MB");
            return
        }               
    }

    const handleSubmit = (event: React.FormEvent<EventTarget>) => {
        console.log("handle submit");
        event.preventDefault();

        validateForm();

        if(errors.length > 0) {
            return;
        }
        console.log(errors);


        // axios request bhejo
    }

    return (
        <form className="bg-white rounded-lg p-8 max-w-md mx-auto border shadow-xl" onSubmit={handleSubmit}>
            <div className="text-2xl font-bold text-center">Add Course</div>

            <div>
                <label>Title</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title:e.target.value})} required/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={formData.description} onChange={(e) => setFormData({...formData, description:e.target.value})} required/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={formData.price ?? ""}  onChange={(e) => setFormData({...formData, price:+e.target.value})} required/>
            </div>
            <div>
                <label>Image Url</label>
                <input type="file" accept="image/*" multiple={false} onChange={(e) => {setFormData({...formData, imageUrl: e.target.files?.[0]})}} required/>
            </div>

            <button type="submit">
                Submit
            </button>
        </form>
    )
}