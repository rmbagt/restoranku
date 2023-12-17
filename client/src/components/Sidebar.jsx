import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/Logo.png";
import RightArrowIcon from "./../assets/icons/rightArrow.svg";
import {
  ArrowLeftRightIcon,
  PersonStanding,
  Users,
  LayoutDashboard,
  LibraryBig,
  BookOpenText,
  Soup,
} from "lucide-react";
import { motion } from "framer-motion";

const contents = [
  {
    icon: LayoutDashboard,
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: ArrowLeftRightIcon,
    text: "Order",
    link: "/order",
  },
  {
    icon: Users,
    text: "Customer",
    link: "/customer",
  },
  {
    icon: PersonStanding,
    text: "Waiter",
    link: "/waiter",
  },
  {
    icon: BookOpenText,
    text: "Menu",
    link: "/menu",
  },
  {
    icon: LibraryBig,
    text: "Recipe",
    link: "/recipe",
  },
  {
    icon: Soup,
    text: "Ingredients",
    link: "/ingredients",
  },
];

const variants = {
  expanded: { width: "250px" },
  nonexpanded: { width: "100px" },
};

function Sidebar({ pageIndex, isExpanded, setIsExpanded }) {
  const [isChosen, setIsChosen] = useState(pageIndex);

  const navigate = useNavigate();

  function handleNavigation(index, link) {
    setIsChosen(index);
    navigate(link, { replace: true });
  }

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-slate-200 relative" +
        (isExpanded ? " px-10" : " px-6")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-slate-600 flex justify-center items-center"
      >
        <img src={RightArrowIcon} className="w-2" />
      </div>

      <div className="logo-div flex space-x-4 items-center font-semibold text-xl ml-3">
        <img className="w-6 h-8" src={Logo} />
        <span className={!isExpanded ? "hidden" : " block"}>Restoranku</span>
      </div>

      <div className="flex flex-col space-y-8 mt-12">
        <ul className="nav-links w-full">
          {contents.map((content, index) => (
            <li
              key={index}
              className={
                "flex space-x-3 w-full p-3 rounded hover:cursor-pointer hover:bg-slate-300" +
                (!isExpanded ? " justify-center" : "") +
                (isChosen === index ? " bg-slate-400" : "")
              }
              onClick={() => handleNavigation(index, content.link)}
            >
              <content.icon size={isExpanded ? 24 : 20} />
              <span className={!isExpanded ? "hidden" : "block"}>
                {content.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Sidebar;
