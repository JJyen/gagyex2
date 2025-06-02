"use client";

import Link from "next/link";
import { useState } from "react";

export default function MenuBar() {
  const [fill, setFill] = useState(["fill-item", "", "", ""]);

  function handleSelectMenu(itemNum) {
    const newfill = ["", "", "", ""];
    newfill[itemNum] = "fill-item";
    setFill(newfill);
  }

  return (
    <div className="menu-box">
      <Link
        href="/"
        className={`menu-item ${fill[0]}`}
        onClick={() => handleSelectMenu(0)}
      >
        홈
      </Link>
      <Link
        href="/record"
        className={`menu-item ${fill[1]}`}
        onClick={() => handleSelectMenu(1)}
      >
        기록하기
      </Link>
      <Link
        href="/adjustment"
        className={`menu-item ${fill[2]}`}
        onClick={() => handleSelectMenu(2)}
      >
        이달의정산
      </Link>
      <Link
        href="/mypage"
        className={`menu-item ${fill[3]}`}
        onClick={() => handleSelectMenu(3)}
      >
        내정보
      </Link>
    </div>
  );
}
