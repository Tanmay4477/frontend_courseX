import { useState } from "react";

interface Props {
  prop: string;
}

export default function Auth({ prop }: Props) {
  const [username, setUsername] = useState("demo123");
  const [password, setPassword] = useState("*******");

  return (
    <div className="bg-black px-4 py-12 max-w-screen-sm mx-auto rounded-lg">
      <div className="flex flex-col gap-4 text-white">
        <h1 className="font-bold text-lg">Welcome to CourseX</h1>
        <div className="text-sm">Don't worry, {prop} to courseX because we do have {prop} flow</div>
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
            <button className="rounded-lg bg-gray-500 h-8 w-40 text-center">{prop} as admin</button>
            <button className="rounded-lg bg-gray-500 h-8 w-40 text-center">{prop} as user</button>
        </div>
        <div>Go to {""}</div>
        <div>Test</div>
      </div>
    </div>
  );
}
