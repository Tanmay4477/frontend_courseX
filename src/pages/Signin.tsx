import {Auth} from "../components/Auth/Auth";
import { AuthType } from "../components/Auth/Auth";

export default function Signin() {
    return (
        <div className="">
            <Auth prop={AuthType.Signin}/>
        </div>
    )
}