import { tableTds } from "./data";

const Table = () => {
  return (
    <table border="1" className="w-[1170px] text-center m-auto">
      <thead className="bg-[#33835C] text-white">
        <tr>
          <th className="p-3">رقم الشكوى</th>
          <th>نوع الشكوى</th>
          <th>تاريخ الشكوى</th>
          <th>المدينة</th>
          <th>الادارة</th>
          <th>الحالة</th>
          <th>عرض</th>
        </tr>
      </thead>
      <tbody>
        <tr className=" border-b-2 border-[#656565]">
          <td className="p-6 font-bold">1</td>
          {tableTds.map((tds) => {
            const { id, td, color } = tds;
            return (
              <>
                <td className={`text-[${color}]`} key={id}>
                  {td}
                </td>
              </>
            );
          })}
        </tr>
        <tr className=" border-b-2 border-[#656565]">
          <td className="p-6 font-bold">2</td>
          {tableTds.map((tds) => {
            const { id, td, color } = tds;
            return (
              <td className={`text-[${color}]`} key={id}>
                {td}
              </td>
            );
          })}
        </tr>
        <tr className=" border-b-2 border-[#656565]">
          <td className="p-6 font-bold">3</td>
          {tableTds.map((tds) => {
            const { id, td, color } = tds;
            return (
              <td className={`text-[${color}]`} key={id}>
                {td}
              </td>
            );
          })}
        </tr>
        <tr className=" border-b-2 border-[#656565]">
          <td className="p-6 font-bold">4</td>
          {tableTds.map((tds) => {
            const { id, td, color } = tds;
            return (
              <td className={`text-[${color}]`} key={id}>
                {td}
              </td>
            );
          })}
        </tr>
        <tr className=" border-b-2 border-[#656565]">
          <td className="p-6 font-bold">5</td>
          {tableTds.map((tds) => {
            const { id, td, color } = tds;
            return (
              <td className={`text-[${color}]`} key={id}>
                {td}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};
export default Table;
