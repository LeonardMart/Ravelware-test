import { X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import moment from "moment";

import "moment/locale/id";
import SearchIcon from "../../assets/icon/search-icon";
import getInitials from "../../utils/getInitials";
import { useDispatch, useSelector } from "react-redux";
import { resetAuth } from "../../store/auth/authSlice";

export default function Navbar({ toggleSidebar }) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.userInfo)
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    moment.locale("id");

    const updateTime = () => {
      setTime(moment().format("HH:mm:ss, DD MMMM YYYY"));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const logoutHandler = () => {
    dispatch(resetAuth());
  };

  return (
    <nav className="sticky top-0 bg-gray-950 text-white p-4 flex items-center justify-between">
      <div className="flex flex-row items-center space-x-10">
        <button onClick={toggleSidebar} className="text-white">
          <Menu size={28} />
        </button>
        <div className="p-2 bg-gray-800 rounded-xl flex flex-row items-center">
          <input
            value={search}
            className="bg-gray-800 focus:outline-none"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          {!search ? (
            <SearchIcon className="w-4 h-auto text-gray-500" />
          ) : (
            <button onClick={() => setSearch("")}>
              <X className="w-4 h-auto text-gray-500" />
            </button>
          )}
        </div>
      </div>

      <div className="relative flex flex-row items-center space-x-4">
        <div className="text-lg font-semibold">{time}</div>

        <div className="flex flex-row space-x-2 items-center">
          <div className="bg-gray-300 rounded-full w-9 h-9 flex text-white items-center justify-center text-xs font-medium">
            <span className="text-gray-500 text-lg font-bold">
              {getInitials(user ? user : "-")}
            </span>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-row space-x-2 items-center"
          >
            <span className="text-lg max-w-[100px] truncate">{user}</span>
            <span className="text-sm">▼</span>
          </button>
        </div>

        {open && (
          <div className="absolute right-0 mt-52 w-40 bg-white text-black rounded shadow-lg">
            <ul>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                My Profile
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Edit Profile
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Settings</li>
              <li
                onClick={logoutHandler}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
