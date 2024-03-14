import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import menu from "../images/icons8-menu-squared-50.png";

const Sidebar = ({ logout }) => {
  const location = useLocation();
  let currentPage = location.pathname;
  const [openMenu, setOpenMenu] = useState(false);
  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  //to close the dropdown after clicking a link
  const hideDropdown = () => {
    setOpenMenu(false);
  };

  return (
    <div>
      <div className="w-[20%] h-[100vh] py-8 fixed top-0 left-0 bg-[#020d18] md:block hidden">
        <img
          alt=""
          src="/images/logo-lorenzo.jpg"
          className="w-16 h-auto ml-12 mb-8"
        />
        <ul className="w-full text-white">
          <Link to="/admin">
            <li
              className={`w-[90%] mb-6 py-3 px-12 cursor-pointer ${
                currentPage === "/admin"
                  ? "border-red-600/50"
                  : "border-gray-200"
              } bg-[#111827] hover:bg-red-600/20 border rounded-r-2xl`}
            >
              Dashboard
            </li>
          </Link>
          <li
            onClick={logout}
            className={`w-[90%] mb-8 py-3 px-12 cursor-pointer border-red-600/50 bg-[#111827] hover:bg-red-600/20 border rounded-r-2xl`}
          >
            Log out
          </li>
        </ul>
      </div>

      {/* mobile nav */}
      <div className="w-full h-[60px] fixed top-0 left-0 bg-[#020d18] flex md:hidden justify-between items-center px-4 shadow-md z-50">
        <img
          alt=""
          src="/images/logo-lorenzo.jpg"
          className="w-10 h-auto mr-auto"
        />
        <img
          alt="hamburger"
          src={menu}
          onClick={handleClick}
          className="w-7 h-7 cursor-pointer"
        />

        {openMenu && (
          <ul className="w-full h-[100vh] slide bg-[#020d18] pt-[60px] absolute top-0 left-0 text-white">
            <img
              alt=""
              src="/images/icons8-close-window-50.png"
              className="w-8 h-8 mb-8 absolute top-5 right-3"
              onClick={hideDropdown}
            />
            <Link to="/admin">
              <li
                className={`w-[70%] mb-8 py-3 px-12 cursor-pointer border-red-600/50 bg-[#111827] hover:bg-red-600/20 border rounded-r-2xl`}
              >
                Dashboard
              </li>
            </Link>
            <li
              onClick={logout}
              className={`w-[70%] mb-8 py-3 px-12 cursor-pointer border-red-600/50 bg-[#111827] hover:bg-red-600/20 border rounded-r-2xl`}
            >
              logout
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
