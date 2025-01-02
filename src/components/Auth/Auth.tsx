import axios from "axios";
import { useState } from "react";

export enum AuthType {
    Signup = "signup",
    Signin = "signin"
}

interface Props {
  prop: AuthType
}

export function Auth({ prop }: Props) {
  const [username, setUsername] = useState("demo123");
  const [password, setPassword] = useState("*******");

  const redirectText: AuthType= (prop === AuthType.Signup) ? AuthType.Signin : AuthType.Signup;

  async function adminFunction() {
    const response = await axios.post(`http://localhost:3000/api/v1/admin/${prop}`, {
        username,
        password
    });
    console.log(response, "res[pnse");
    localStorage.setItem("token", response.data.msg);
  }

  async function userFunction() {
    const response = await axios.post(`http://localhost:3000/api/v1/${prop}`, {
        username,
        password
    });
    console.log(response, "res[pnse userrrr");
    localStorage.setItem("token", response.data.token);
  }

  const newProp: string = prop.charAt(0).toUpperCase() + prop.slice(1);
  const newRedirectText: string = redirectText.charAt(0).toUpperCase() + redirectText.slice(1);

  return (
    <div className="bg-black px-4 py-12 max-w-screen-sm mx-auto rounded-lg">
      <div className="flex flex-col gap-4 text-white">
        <h1 className="font-bold text-lg">Welcome to CourseX</h1>
        <div className="text-sm">Don't worry, {newProp} to courseX because we do have {newProp} flow</div>
        <div className="flex flex-col gap-2">
          <div>
            <div>Username</div>
            <input type="text" value={username} onClick={() => setUsername("")} className="rounded-lg h-8 bg-gray-700 pl-3 opacity-40" onChange={ e => { setUsername(e.target.value) }} />
          </div>
          <div>
            <div>Password</div>
            <input type="text" value={password} onClick={() => setPassword("")} className="rounded-lg h-8 bg-gray-700 pl-3 opacity-40" onChange={ e => { setPassword(e.target.value) }} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
            <button onClick = {adminFunction} className="rounded-lg bg-gray-500 h-8 w-40 text-center">{newProp} as admin</button>
            <button onClick = {userFunction} className="rounded-lg bg-gray-500 h-8 w-40 text-center">{newProp} as user</button>
        </div>
        <div className="underline">Go to {newRedirectText} Page</div>
      </div>
    </div>
  );
}
