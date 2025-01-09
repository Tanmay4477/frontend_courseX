import {Auth} from "../components/Auth/Auth";
import { AuthType } from "../components/Auth/Auth";

export default function Signup() {
    return (
        <div className="">
            <Auth prop={AuthType.Signup}/>
        </div>
    )
}