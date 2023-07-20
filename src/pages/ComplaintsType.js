import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { types, types2 } from "../components/data";
import { useState } from "react";

const ComplaintsType = () => {
  const [activeBtn, setActiveBtn] = useState(null);
  const handleClick = (elementId) => {
    setActiveBtn(elementId);
  };

  return (
    <div className="relative sm:h-full h-fit ">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[100%] md:mt-0 mt-10">
        <h1 className="text-[32px] mb-8">اختر نوع الشكوى</h1>
        <div className="flex flex-wrap items-center gap-10 justify-center lg:w-[1000px] w-full">
          {types.map((type) => {
            const { id, img, secImg, title } = type;
            return (
              <div
                id={id}
                onClick={() => handleClick(id)}
                key={id}
                className={
                  id === activeBtn
                    ? "active rounded border border-[#8C8C8C] h-[120px] w-[150px] py-4 px-6 cursor-pointer "
                    : "rounded border border-[#8C8C8C] h-[120px] w-[150px] py-4 px-6 cursor-pointer"
                }
              >
                <img
                  id={id}
                  src={id === activeBtn ? secImg : img}
                  alt="img"
                  className="mx-auto mb-4 "
                />
                <p id={id} className="text-center">
                  {title}
                </p>
              </div>
            );
          })}
          {types2.map((type) => {
            const { id, img, secImg, title } = type;
            return (
              <div
                onClick={() => handleClick(id)}
                key={id}
                className={
                  id === activeBtn
                    ? "active rounded border border-[#8C8C8C] h-[120px] w-[150px] py-4 px-6 cursor-pointer "
                    : "rounded border border-[#8C8C8C] h-[120px] w-[150px] py-4 px-6 cursor-pointer "
                }
              >
                <img
                  id={id}
                  src={id === activeBtn ? secImg : img}
                  alt="img"
                  className="mx-auto mb-4 "
                />
                <p id={id} className="text-center">
                  {title}
                </p>
              </div>
            );
          })}
        </div>
        <Link
          to={activeBtn !== null ? "/control" : ""}
          className={
            activeBtn !== null
              ? "active sm:w-[400px] w-[250px] rounded-[4px] my-10 mx-6 border border-[#C0C0C0] py-4 cursor-pointer disabled:opacity-75 text-center"
              : "sm:w-[400px] w-[250px] rounded-[4px] my-10 mx-6 border border-[#C0C0C0] py-4 cursor-not-allowed disabled:opacity-75 text-center"
          }
        >
          تأكيد
        </Link>
      </div>
    </div>
  );
};
export default ComplaintsType;
