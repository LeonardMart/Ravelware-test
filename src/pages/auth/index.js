import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const loginHandler = () => {
    if (username.trim() === "") return;
    dispatch(setUserInfo(username));
    navigate("/");
  };

  return (
    <div className="flex bg-gray-900 h-screen justify-center items-center">
      <div className="bg-gray-700 w-fit p-4 rounded-md flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="text-white">Username</div>
          <div className="p-2 bg-gray-500 rounded-lg">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && loginHandler()}
              className="bg-gray-500 focus:outline-none text-white w-52"
            />
          </div>
        </div>
        <button
          onClick={loginHandler}
          className="w-full bg-gray-800 text-white py-1.5 rounded-md hover:bg-gray-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Auth;
