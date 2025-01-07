import axios, { AxiosError } from "axios";
import { SetStateAction, useState, Dispatch } from "react";
import { useNavigate } from "react-router-dom";

export enum AuthType {
    Signup = "signup",
    Signin = "login"
}

interface Props {
  cProp: AuthType;
  setCProp: Dispatch<SetStateAction<AuthType|null|undefined>>;
}

export function Auth({ cProp, setCProp }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState(""); 
  let navigate = useNavigate();

  const redirectText: AuthType= (cProp === AuthType.Signup) ? AuthType.Signin : AuthType.Signup;

  function redirectFunction() {
    try {
      setCProp(redirectText);
    } catch (error:unknown) {
      console.log(error, "error");
      setError("Something went wrong");
    }
  }

  async function adminFunction() {
    try {
      const response = await axios.post(`http://localhost:3000/api/v1/admin/${cProp}`, {
        username,
        password
      });
      if(cProp === AuthType.Signin) {
        localStorage.setItem("token", response.data.token)
        navigate("/courses");
      }

      console.log("response", response);
      setError("")
      setResponse(response.data.msg);
    } 
    catch (error:unknown) {
      console.log("error", error);
      if (error instanceof AxiosError) {
        setResponse("")
        setError(error.response ? error.response.data.msg : "Axios error occured");
      }
      else {
        setResponse("")
        setError("Something went wrong")
      }
    }
  }

  async function userFunction() {
    try {
      const response = await axios.post(`http://localhost:3000/api/v1/${cProp}`, {
        username,
        password
      });
      if(cProp === AuthType.Signin) {
        localStorage.setItem("token", response.data.token)
        navigate("/courses");
      };
      console.log("response", response.data);
      setError("")
      setResponse(response.data.msg);
    } 
    catch (error:unknown) {
      if (error instanceof AxiosError) {
        console.log("error", error.response);
        setResponse("")
        setError(error.response ? error.response.data.msg : "Axios error occured");
      }
      else {
        console.log("error", error);
        setResponse("")
        setError("Something went wrong")
      }
    }
  }

  const newProp: string = cProp.charAt(0).toUpperCase() + cProp.slice(1);
  const newRedirectText: string = redirectText.charAt(0).toUpperCase() + redirectText.slice(1);

  return (
    <div className="bg-black px-4 py-12 max-w-screen-sm mx-auto rounded-lg border border-white">
      <div className="flex flex-col gap-4 text-white">
        <h1 className="font-bold text-lg">Welcome to CourseX</h1>
        <div className="text-sm">Don't worry, {newProp} to courseX because we do have {newProp} flow</div>
        <div className="flex flex-col gap-2">
          <div>
            <div>Username</div>
            <input type="text" placeholder="demo123" value={username} className="rounded-lg h-8 bg-gray-700 pl-3 font-satoshiBold" onChange={ e => { setUsername(e.target.value) }} />
          </div>
          <div>
            <div>Password</div>
            <input type="text" placeholder="******" value={password} className="font-satoshiBold rounded-lg h-8 bg-gray-700 pl-3" onChange={ e => { setPassword(e.target.value) }} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
            <button onClick = {adminFunction} className="rounded-lg bg-gray-500 h-8 w-40 text-center">{newProp} as admin</button>
            <button onClick = {userFunction} className="rounded-lg bg-gray-500 h-8 w-40 text-center">{newProp} as user</button>
        </div>
        <button onClick={redirectFunction} className="underline self-start">Go to {newRedirectText} Page</button>
        {error && <div className="text-red-500 text-center">{error}</div>}
        {response && <div className="text-green-500 text-center">{response}</div>}

      </div>
    </div>
  );
}
