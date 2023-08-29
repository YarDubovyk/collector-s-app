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
      <div className="sidebar">
        <button className="close-button" onClick={onClose}>
          Close
        </button>

      </div>
    </CSSTransition>
  );
};

export default Sidebar;