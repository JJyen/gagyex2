"use client";

import { MdArrowDropDown } from "react-icons/md";
import "./Dropdown.css";
import { useState } from "react";

export default function Dropdown({ name }) {
  const [closeList, setCloseList] = useState(true);

  return (
    <div className="dropdown">
      <button onClick={() => setCloseList(!closeList)}>
        <span>{name}</span>
        <MdArrowDropDown className="dropdown-icon" />
      </button>
      <ul className={`dropdown-menu ${closeList ? "close-list" : ""}`}>
        <li>2023</li>
        <li>2024</li>
        <li>2025</li>
      </ul>
    </div>
  );
}
