import summary from "../assets/Icons/summary.svg";
import reporting1 from "../assets/Icons/repoting1.svg";
import reporting2 from "../assets/Icons/reporting2.svg";
import car from "../assets/Icons/car.svg";
import carMaintance from "../assets/Icons/carMaintance.svg";
import { nanoid } from "nanoid";
import { AiOutlineEye } from "react-icons/ai";

export const types = [
  {
    id: nanoid(),
    img: carMaintance,
    title: "صيانة السيارات",
  },
  {
    id: nanoid(),
    img: car,
    title: "احقية خصم تأمين السيارات",
  },
  {
    id: nanoid(),
    img: reporting2,
    title: "البلاغ عن احتيال",
  },
  {
    id: nanoid(),
    img: reporting1,
    title: "الابلاغ عن حادث",
  },
  {
    id: nanoid(),
    img: summary,
    title: "متخصص تقيم الأضرار",
  },
];

export const types2 = [
  {
    id: nanoid(),
    img: summary,
    title: "متخصص تقيم الأضرار",
  },
  {
    id: nanoid(),
    img: reporting2,
    title: "البلاغ عن احتيال",
  },
  {
    id: nanoid(),
    img: reporting1,
    title: "الابلاغ عن حادث",
  },
  {
    id: nanoid(),
    img: car,
    title: "احقية خصم تأمين السيارات",
  },
  {
    id: nanoid(),
    img: carMaintance,
    title: "صيانة السيارات",
  },
];

export const numsTypes = [
  {
    id: nanoid(),
    title: "شكاوى جديدة",
    num: 150,
    bgColor: "FDBE7B",
  },
  {
    id: nanoid(),
    title: "شكاوى تم اعتمادها",
    num: 150,
    bgColor: "12AA77",
  },
  {
    id: nanoid(),
    title: "الشكاوى المرفوضة",
    num: 44,
    bgColor: "FF6A6F",
  },
  {
    id: nanoid(),
    title: "الشكاوى المقبولة",
    num: 44,
    bgColor: "43A7D8",
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
