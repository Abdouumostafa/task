import summary from "../assets/Icons/summary.svg";
import summaryWhite from "../assets/Icons/summary copy.svg";
import reporting1 from "../assets/Icons/repoting1.svg";
import reporting1White from "../assets/Icons/repoting1 copy.svg";
import reporting2 from "../assets/Icons/reporting2.svg";
import reporting2White from "../assets/Icons/reporting2 copy.svg";
import car from "../assets/Icons/car.svg";
import carWhite from "../assets/Icons/car copy.svg";
import carMaintance from "../assets/Icons/carMaintance.svg";
import carMaintanceWhite from "../assets/Icons/carMaintance copy.svg";
import { nanoid } from "nanoid";
import { AiOutlineEye } from "react-icons/ai";

export const types = [
  {
    id: nanoid(),
    img: carMaintance,
    secImg: carMaintanceWhite,
    title: "صيانة السيارات",
  },
  {
    id: nanoid(),
    img: car,
    secImg: carWhite,
    title: "احقية خصم تأمين السيارات",
  },
  {
    id: nanoid(),
    img: reporting2,
    secImg: reporting2White,
    title: "البلاغ عن احتيال",
  },
  {
    id: nanoid(),
    img: reporting1,
    secImg: reporting1White,
    title: "الابلاغ عن حادث",
  },
  {
    id: nanoid(),
    img: summary,
    secImg: summaryWhite,
    title: "متخصص تقيم الأضرار",
  },
];

export const types2 = [
  {
    id: nanoid(),
    img: summary,
    secImg: summaryWhite,
    title: "متخصص تقيم الأضرار",
  },
  {
    id: nanoid(),
    img: reporting2,
    secImg: reporting2White,
    title: "البلاغ عن احتيال",
  },
  {
    id: nanoid(),
    img: reporting1,
    secImg: reporting1White,
    title: "الابلاغ عن حادث",
  },
  {
    id: nanoid(),
    img: car,
    secImg: carWhite,
    title: "احقية خصم تأمين السيارات",
  },
  {
    id: nanoid(),
    img: carMaintance,
    secImg: carMaintanceWhite,
    title: "صيانة السيارات",
  },
];

export const newComplaints = [
  {
    id: nanoid(),
    title: "التاريخ",
  },
  {
    id: nanoid(),
    title: "التصنيف",
  },
  {
    id: nanoid(),
    title: "الحالة",
  },
];

export const tableTds = [
  {
    id: nanoid(),
    td: "شكوى 1",
    color: "black",
  },
  {
    id: nanoid(),
    td: "مايو ,4, 2023",
    color: "black",
  },
  {
    id: nanoid(),
    td: "الرياض",
    color: "black",
  },
  {
    id: nanoid(),
    td: "ادارة الشكاوى",
    color: "black",
  },
  {
    id: nanoid(),
    td: "تم قبولها",
    color: "#FFAB5F",
  },
  {
    id: nanoid(),
    td: <AiOutlineEye />,
    color: "black",
  },
];
