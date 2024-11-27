import { useDispatch } from "react-redux";
import { setAdminLoggedIn } from "../../store/slices/authSlice";
const useNavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setAdminLoggedIn(false));
  };

  return handleLogout;
};

export default useNavBar;
