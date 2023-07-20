import { useState } from "react";
import logo from "../assets/logo.svg";
import { BiSolidBellRing, BiBell } from "react-icons/bi";

const Navbar = () => {
  const [toggleBell, setToggleBell] = useState(true);
  return (
    <div className="bg-[#f4f4f4] max-h-[100px] sm:py-8 py-6 sm:px-10 px-8 flex items-center justify-between">
      <img src={logo} alt="" />
      <div className="btns flex items-center gap-4">
        <select className=" border border-[#E1E3E6] focus:outline-none rounded-lg appearance-none py-2 px-4 cursor-pointer">
          <option value="AR">AR</option>
          <option value="EN">EN</option>
        </select>
        <button
          className="border border-[#E1E3E6] rounded-lg bg-white py-2 px-4"
          onClick={() => setToggleBell(!toggleBell)}
        >
          {toggleBell ? (
            <BiBell className="text-[23px]" />
          ) : (
            <BiSolidBellRing className="text-[23px] text-gray-700" />
          )}
        </button>
      </div>
    </div>
  );
};
export default Navbar;
