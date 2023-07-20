import ControlNav from "../components/ControlNav";
import Table from "../components/Table";
import { newComplaints, numsTypes } from "../components/data";

const ControlComplaints = () => {
  return (
    <>
      <ControlNav />
      <div className="flex mt-10 text-center justify-center items-center gap-6 flex-wrap mx-6">
        <div
          className={`min-h-[110px] min-w-[275px] text-white rounded-[14px] py-[20px] px-[50px] bg-[#FDBE7B]`}
        >
          <p className="text-[20px]">شكاوى جديدة</p>
          <p className="text-[24px] font-bold">150</p>
        </div>
        <div
          className={`min-h-[110px] min-w-[275px] text-white rounded-[14px] py-[20px] px-[50px] bg-[#12AA77]`}
        >
          <p className="text-[20px]">شكاوى تم اعتمادها</p>
          <p className="text-[24px] font-bold">150</p>
        </div>
        <div
          className={`min-h-[110px] min-w-[275px] text-white rounded-[14px] py-[20px] px-[50px] bg-[#FF6A6F]`}
        >
          <p className="text-[20px]"> الشكاوى المرفوضة</p>
          <p className="text-[24px] font-bold">44</p>
        </div>
        <div
          className={`min-h-[110px] min-w-[275px] text-white rounded-[14px] py-[20px] px-[50px] bg-[#43A7D8]`}
        >
          <p className="text-[20px]">الشكاوى المقبولة</p>
          <p className="text-[24px] font-bold">44</p>
        </div>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center m-auto gap-10 mt-10">
        <h2 className=" text-[26px] w-[260px]">الشكاوى الجديدة</h2>
        {newComplaints.map((element) => {
          const { id, title } = element;
          return (
            <div
              key={id}
              className="flex justify-between gap-6 items-center min-w-[260px]"
            >
              <p className="text-[20px] min-w-[70px]">{title}</p>
              <select className="font-bold w-full bg-[#d5fdea] p-2 rounded-[6px] focus:outline-none">
                <option className="font-bold" value="الكل">
                  الكل
                </option>
              </select>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-10 m-auto">
        <Table />
      </div>
    </>
  );
};
export default ControlComplaints;
