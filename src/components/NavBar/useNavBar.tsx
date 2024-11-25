const useNavBar = () => {
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
  };

  return handleLogout
};

export default useNavBar
