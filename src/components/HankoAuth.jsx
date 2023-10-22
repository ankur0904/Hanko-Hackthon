import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = process.env.REACT_APP_KEY;


export default function HankoAuth() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <hanko-auth/>
    </div>
  );
}