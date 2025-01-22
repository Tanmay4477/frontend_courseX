import { useAuthContext } from "@/context/AuthContext";
import CardUI from "./CardUI";

const DashboardUI = () => {
  const { data } = useAuthContext();
  const image =
    "https://appx-wsb-gcp.akamai.net.in/teachcode/admin/COURSE/cover/1699610063563WhatsApp-Image-2023-11-08-at-8.31.14-PM.jpeg";
  const name = "0-1";

//   const courses = await CourseAPI.


  return (
    <div className="flex flex-col gap-8 w-full">
      <div></div>
      <div className="text-3xl font-satoshiBold self-start">
        Good Afternoon {data?.name}
      </div>
      <div className="grid grid-cols-6 gap-4">
        {/* {[1, 2, 3, 4].map((card, ind) => ( */}
          <CardUI image={image} name={name} />
          <CardUI image={image} name={name} />
          <CardUI image={image} name={name} />  <CardUI image={image} name={name} />  <CardUI image={image} name={name} />  <CardUI image={image} name={name} />  <CardUI image={image} name={name} />  <CardUI image={image} name={name} />  <CardUI image={image} name={name} />  <CardUI image={image} name={name} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default DashboardUI;
