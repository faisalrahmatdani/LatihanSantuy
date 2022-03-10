import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Content from "../pages/Content";
import Home from "../pages/Home";

const MainPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="flex flex-col">
        <div className="hidden md:flex h-screen">
          <Sidebar />
        </div>
        <div></div>
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
