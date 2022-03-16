import React from "react";
import { NavLink, Link } from "react-router-dom";
import { NavItem } from "../utils/data";

const Sidebar = (closeToggle) => {

  const HandleClose = (e) => {
   if(closeToggle) closeToggle(false)
  }

  const active = "uppercase font-bold underline text-red-400";
  const notActive = "uppercase text-white hover:text-red-600";

  return (
    <aside className="flex flex-col w-3/5 md:w-1/5 bg-gray-800 h-full overflow-y-auto fixed left-0">
      <header className="flex flex-col text-white items-center py-10">
        <Link to="/home">Blog Berita</Link>
      </header>
      <nav className="flex flex-col gap-10">
        {NavItem?.map((i, index) => (
          <div className="flex flex-col items-start justify-center pl-10 ">
            <NavLink to={`/${i}`} key={index} className={({ isActive }) => (isActive ? active : notActive)} >
              {i}
            </NavLink>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
