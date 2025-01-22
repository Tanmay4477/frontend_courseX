const CardUI = ({image, name}: {image: string, name: string}) => {
    return (
        <div className="w-full rounded-md flex flex-col gap-3 lg:max-w-sm shadow-lg px-4 pb-4 col-span-full md:col-span-3 lg:col-span-2">
            <img src={image} alt={name} className="rounded-md"/>
            <div className="text-lg self-start">{name}</div>
            <div className="flex gap-2 w-full">
                <button className="bg-black w-full text-white dark:bg-white dark:text-black py-2 text-sm rounded-lg ">View Course</button>
                <button className="bg-gray-100 w-full dark:bg-gray-900 py-2 text-sm rounded-lg">Claim Certificate</button>
            </div>
        </div>
    )
}

export default CardUI;