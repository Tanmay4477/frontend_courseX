import harkirat from "../assets/harkirat.jpg";

export default function Footer() {
  return (
    <div>
      <div className="m-10 flex justify-normal">
        <img src={harkirat} alt="harkirat" className="w-2/12 rounded-full"/>
        <div>
          <div className="text-blue-600 p-2 font-bold text-2xl">100xDevs</div>
          <div className="text-slate-100">because 10x ain't enough.</div>
        </div>
      </div>
    </div>
  );
}
