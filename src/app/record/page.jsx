"use client";

import "./record.css";
import Dropdown from "@/componets/dropdown/Dropdown";

export default function Record() {
  // const currentPath = usePathname();
  // console.log(currentPath ? currentPath : "null");

  return (
    <div className="record-container">
      <header className="record-header">
        <div className="search-box">
          <Dropdown name={"연도"} />
          <Dropdown name={"월"} />
          <Dropdown name={"일"} />
          <Dropdown name={"분류"} />
          <button className="search-btn">찾기</button>
        </div>
        <button className="add-record">기록 추가하기</button>
      </header>
      <main className="aa"></main>
    </div>
  );
}
