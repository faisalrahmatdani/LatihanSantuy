import React from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "../utils/data";

const Sidebar = () => {
  const active = "uppercase font-bold underline text-red-400";
  const notActive = "uppercase text-white";

  return (
    <aside className="flex flex-col w-64 bg-gray-800 h-full overflow-y-auto">
      <header className="flex flex-col text-white items-center py-10">
        <NavLink to="/home">Blog Berita</NavLink>
      </header>
      <nav className="flex flex-col gap-10">
        {NavItem?.map((i) => (
          <div className="flex flex-col items-start justify-center pl-10 ">
            <NavLink to={`/${i}`} key="nav-item" className={({ isActive }) => (isActive ? active : notActive)}>
              {i}
            </NavLink>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
