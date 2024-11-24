import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
interface ISignin {
  username: string;
  password: string;
}
const useSignin = () => {
  const [signinData, setSigninData] = useState<ISignin>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    const inputFieldName = event.target.name;
    const inputFieldValue = event.target.value;
    if (inputFieldName === "username") {
      setSigninData({ ...signinData, username: inputFieldValue });
    } else if (inputFieldName === "password")
      setSigninData({ ...signinData, password: inputFieldValue });
  };
  const handleSignin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    console.log(signinData);
    navigate("/landing");
  };

  return { signinData, handleFormChange, handleSignin };
};

export default useSignin;
