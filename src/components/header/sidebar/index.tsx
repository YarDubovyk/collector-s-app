import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css'; 

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="sidebar">
      <div className="sidebar bg-slate-600 border-cyan-50 border-4 ">
        <button className="absolute top-2 right-2" onClick={onClose}>
          Close
        </button>

      </div>
    </CSSTransition>
  );
};

export default Sidebar;