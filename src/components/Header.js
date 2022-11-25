import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineFile } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { CiFlag1 } from "react-icons/ci";
import { HiOutlinePhoto } from "react-icons/hi2";
import { GoGraph } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const data = [
  {
    title: "Overview",
    link: "/",
    icon: <IoPersonOutline />,
  },
  {
    title: "Project",
    link: "/project",
    icon: <BsHeart />,
  },
  {
    title: "Documents",
    link: "/documents",
    icon: <AiOutlineFile />,
  },
  {
    title: "Progress",
    link: "/progress",
    icon: <CiFlag1 />,
  },
  {
    title: "Assets",
    link: "/assets",
    icon: <HiOutlinePhoto />,
  },
  {
    title: "Apps",
    link: "/apps",
    icon: <GoGraph />,
  },
];

export default function Header() {
  const [items] = useState(data);
  const [isOpen, setIsOpen] = useState(false);

  let activeStyle = {
    color: "#2563eb",
    fontWeight: "bold",
  };

  return (
    <>
      <header className="lg:bg-white lg:py-5 lg:px-5 lg:shadow">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed z-50 text-2xl top-5 left-5 lg:hidden"
        >
          {isOpen ? <GrClose /> : <FaBars />}
        </button>

        <nav className={`navbar ${isOpen && "open"}`}>
          <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-center lg:gap-6">
            {items.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {item.icon} {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
