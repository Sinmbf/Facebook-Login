/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    !localStorage.getItem("auth-token") && (
      <>
        {enqueueSnackbar("Login or register to access our page", {
          variant: "info",
        })}
        {navigate("/login")}
      </>
    );
  }, []);
  // Function to handle click
  const handleClick = () => {
    localStorage.removeItem("auth-token");
    enqueueSnackbar("Logged out successfully", { variant: "success" });
    navigate("/login");
  };
  return (
    <div>
      <div style={{ textAlign: "center", margin: "auto" }}>Home</div>
      <button className="btn_logout" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
export default Home;
