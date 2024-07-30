import { IoIosBriefcase } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import { TbWriting } from "react-icons/tb";
import { TbMoodSmileBeam } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { DiVim } from "react-icons/di";

const categories = [
  {
    title: "Business",
    icon: <IoIosBriefcase size={20} />,
  },
  {
    title: "Education",
    icon: <IoSchoolOutline size={20} />,
  },
  {
    title: "Innovation",
    icon: <HiOutlineLightBulb size={20} />,
  },
  {
    title: "Writing",
    icon: <TbWriting size={20} />,
  },
  {
    title: "Lifestyle",
    icon: <TbMoodSmileBeam size={20} />,
  },
  {
    title: "Health",
    icon: <CiHeart size={20} />,
  },
];

const CategoryLinks = () => {
  return (
    <div className="mt-10 sm:mt-20">
      {categories.map((category) => (
        <div
          key={category.title}
          className="m-1 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 text-white"
        >
          {category.icon}
          <p className="text-2xl">{category.title}</p>
        </div>
      ))}
    </div>
  );
};


export default CategoryLinks;