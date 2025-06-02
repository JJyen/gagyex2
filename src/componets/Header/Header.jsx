import Link from "next/link";
import MenuBar from "./MenuBar";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-box">
        <img src="/assets/logo2.png" alt="로고" />
      </div>
      <MenuBar />
      <div className="signup-btn">
        <Link href="/#">회원가입</Link>
      </div>
    </div>
  );
}
