"use client";
import { useState } from "react";
import Sidebar from "./sidebar";


const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        <div className="bg-rose-700 flex justify-between p-4">
          <a href="/">Logo</a>
          <button onClick={toggleSidebar}>Menu</button>
        </div>
        <div className="flex justify-between p-4 bg-slate-600">
          <button>+ Add games</button>
          <input type="text" className="rounded-sm py-2 px-2" placeholder="serch games" />
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}/>
    </>
  );
};

export default Header;
