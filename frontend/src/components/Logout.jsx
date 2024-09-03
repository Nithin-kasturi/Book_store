import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { resetState } from "../../store/cartSlice";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const dispatch=useDispatch();
  const handleLogout = () => {
    try {
      dispatch(resetState())
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("users");
      toast.success("Please wait while we log you out");

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;