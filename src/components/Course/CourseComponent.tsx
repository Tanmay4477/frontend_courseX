export default function CourseComponent() {
    return (
        <div>
            <div className="rounded-lg bg-white">
                <img src={imageSrc} alt={"course" + alt} />
            </div>
            <div className="max-w-sm">{title}</div>
            <div className="flex justify-between">
                <div>₹{price}</div>
                <div className="text-green-400">29.53% off</div>
            </div>
            <div className="rounded-lg bg-blue-500 text-white text-center" >View Details</div>
        </div>
    )
}