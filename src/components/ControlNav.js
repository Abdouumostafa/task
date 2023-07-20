import { useState } from "react";
import logo from "../assets/logo.svg";
import { BiSolidBellRing, BiBell } from "react-icons/bi";
import person from "../assets/person.svg";

const ControlNav = () => {
  const [toggleBell, setToggleBell] = useState(true);
  return (
    <div className="bg-[#f4f4f4] max-h-[100px] sm:py-8 py-6 sm:px-10 px-8 flex items-center justify-between">
      <img src={logo} alt="" />
      <div>
        <input
          type="search"
          className="sm:block hidden relative focus:outline-none lg:w-[600px] border-[#9e9e9e] sm:w-[350px] py-2 px-4 rounded-[20px]"
          placeholder="ما الذي تبحث عنه ؟"
        />
      </div>
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
      <div className="flex gap-3 mr-2">
        <img src={person} alt="img" className="sm:block hidden" />
        <div className="sm:block hidden">
          <p>فهد</p>
          <p className="text-[#00000099]">مدقق الشكاوى</p>
        </div>
      </div>
    </div>
  );
};
export default ControlNav;
