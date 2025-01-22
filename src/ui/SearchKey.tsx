import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { LuCommand } from "react-icons/lu";
import { useState } from "react";

const SearchKey = () => {
    const [input, setInput] = useState<string>("");

    const clickHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        console.log("He is typing something");
    }

    const crossClick = () => {
        setInput("");
    }

    return (
        <div className="flex justify-normal items-center gap-2 border p-2 rounded-lg h-10 focus-within::outline-none focus-within::ring focus-within:border-blue-500 dark:black">
            <div className=""><CiSearch /></div>
            <input className="text-sm p-1 focus:outline-none dark:bg-black" type="text" placeholder="Search Anything" value={input} onChange={clickHandler}/>
            {input && <button className="" onClick={crossClick}><RxCross2 /></button>}
            {!input && <div className="flex items-center justify-normal gap-1 rounded px-1 text-sm bg-gray-200 dark:bg-gray-600">
                <div><LuCommand /></div>
                <div>K</div>
            </div>}
        </div>
    )
}

export default SearchKey;