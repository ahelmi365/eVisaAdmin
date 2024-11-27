import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAdminLoggedIn } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
interface ISignin {
  username: string;
  password: string;
}
const useSignin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(
    (state: RootState) => state.adminAuth.isLoggedIn
  );
  const [signinData, setSigninData] = useState<ISignin>({
    username: "",
    password: "",
  });
  let isValidToSignin = signinData.username && signinData.password;


  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputFieldName = event.target.name;
    const inputFieldValue = event.target.value;
    if (inputFieldName === "username") {
      setSigninData({ ...signinData, username: inputFieldValue });
    } else if (inputFieldName === "password") {
      setSigninData({ ...signinData, password: inputFieldValue });
    }
  };
  const handleSignin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    console.log(signinData);
    dispatch(setAdminLoggedIn(true));
    navigate("/landing");
  };
  
  useEffect(()=>{
    if(isLoggedIn){
      navigate("/")
    }
  }, [])

  return { signinData, handleFormChange, handleSignin, isValidToSignin };
};

export default useSignin;
