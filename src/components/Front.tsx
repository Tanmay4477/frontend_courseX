export default function Front() {
  return (
    <div className="text-center pt-16 pb-8 tracking-tighter">
      <div className="text-5xl pb-2 font-satoshiBold md:text-7xl">
        <div className="tracking-tighter md:w-[700px] mx-auto bg-red-300 bg-gradient-to-r from-[#CECED0] to-[#A9ACAD] bg-clip-text text-transparent pb-3">
          <span className="bg-gradient-to-b from-blue-400 to-blue-700 text-transparent bg-clip-text mr-4">
            100xDevs,
          </span>
          because 10x ain't enough!
        </div>
      </div>
      <div className="pb-8 text-lg tracking-wide text-gray-300">
        A beginner-friendly platform for mastering programming skills.
      </div>
      <div className="flex justify-center text-sm">
        <div className="bg-blue-500 py-3 px-11 rounded-md m-1 text-slate-50">
          Explore Courses
        </div>
        <div className="bg-white py-3 px-8 text-black rounded-md m-1">
          Explore Notes
        </div>
      </div>
    </div>
  );
}
