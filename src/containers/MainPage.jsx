import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Sidebar from "../components/Sidebar";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Content from "../pages/Content";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import '../App.css'

const MainPage = () => {

  const [toggleSideBar, setToggleSidebar] = useState(false);
  const [animate, setAnimate] = useState(false)

  const slideIn = 'w-3/5 fixed z-40 animate-slide-in'
  const slideClose = 'w-3/5 fixed z-40 animate-slide-close'

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-1/5">
        <div className="hidden md:flex h-screen w-full">
          <Sidebar />
        </div>
          <div className="flex md:hidden fixed top-1 left-4 z-10 ">
          <BiMenuAltLeft fontSize={35} className='cursor-pointer' onClick={() =>{setToggleSidebar(true); setAnimate(true)} }/>
        </div>
        {toggleSideBar && (
          <div className={animate ? slideIn : slideClose}>
            <div className="absolute w-3/5 justify-end px-4 py-4 flex z-50">
              <AiOutlineClose fontSize={25} className='cursor-pointer text-white hover:text-red-600' onClick={() => { setAnimate(false); setTimeout(() => { setToggleSidebar(false)},500)} }/>  
            </div>
            <div className="h-screen">  
            <Sidebar closeToggle={setToggleSidebar}/>
            </div>
          </div>
        )}
      </aside>
      <main className="w-full md:w-4/5">
        <Navbar/>
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
