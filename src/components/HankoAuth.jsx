import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import { useNavigate } from "react-router-dom";
const hankoApi = process.env.REACT_APP_KEY;


export default function HankoAuth() {
  const navigate = useNavigate();
  useEffect(() => {
    register(hankoApi)
    .catch((error) => {
      // handle error
    })
    .then((registration) => {
      // handle registration
      navigate("/");
    });
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <hanko-auth/>
    </div>
  );
}