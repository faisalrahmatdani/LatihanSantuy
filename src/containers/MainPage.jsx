import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Sidebar from "../components/Sidebar";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Content from "../pages/Content";
import Home from "../pages/Home";

const MainPage = () => {

  const [toggleSideBar, setToggleSidebar] = useState(false)
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="flex flex-col">
        <div className="hidden md:flex h-screen">
          <Sidebar />
        </div>
        {!toggleSideBar && (
          <div className="flex md:hidden hover:cursor-pointer px-3 py-3">
          <BiMenuAltLeft fontSize={35} className='cursor-pointer' onClick={() => setToggleSidebar(true)}/>
        </div>
        )}
        {toggleSideBar && (
          <div className="w-64">
            <div className="absolute w-64 flex justify-end px-3 py-3">
              <AiOutlineClose fontSize={25} className='cursor-pointer text-white' onClick={() => setToggleSidebar(false)}/>  
            </div>
            <div className="h-screen">  
            <Sidebar/>
            </div>
          </div>
        )}
      </aside>
      <main className="w-full">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/content" element={<Content />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default MainPage;
