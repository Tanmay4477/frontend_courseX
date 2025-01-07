import { useState } from "react"

export const AddContent = () => {
    const [videoUrl, setVideoUrl] = useState<string[]>(['']);
    const [formSubmit, setFormSubmit] = useState(false);

    const addInputField = () => {
        setFormSubmit(false);
        setVideoUrl([...videoUrl, '']);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        setFormSubmit(false);
        const newInputs = [...videoUrl];
        newInputs[index] = e.target.value;
        setVideoUrl(newInputs);
    }

    const SubmitForm = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
                // axios.post request 
                
        setVideoUrl(['']);
        setFormSubmit(true);
        setTimeout(() => {
            setFormSubmit(false);
        }, 2000)
    }

    return (
        <form className="border mx-auto max-w-md shadow-lg p-4 flex flex-col gap-2 bg-white" onSubmit={SubmitForm}>
            <div className="text-2xl font-bold text-center">Add Content</div>
            <div>
                <label className="block">Add Video Url </label>
            </div>
            {videoUrl.map((input, index) => (
                <div key={index}>
                    <input className="border w-full rounded-md p-1" type="text" value={input} onChange={(e) => handleChange(e, index)} required />
                </div>
            ))}
            
            <button className="text-sm block underline self-start" onClick={addInputField} >Add Another video url</button>
            <button className="w-full bg-blue-500 rounded-md p-2 text-white" type="submit">Submit</button>

            {formSubmit && <div className="text-green-400">Content Added 😊 </div>}

        </form>
    )
}