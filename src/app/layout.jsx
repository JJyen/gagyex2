import "@/styles/globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

function NavBar() {
  return (
    <div className="nav-container">
      <div className="logo-box">
        <img src="/assets/logo.png" alt="로고" />
      </div>
      <div className="nav-box">
        <Link href="/#" className="nav-item">
          홈
        </Link>
        <Link href="/#" className="nav-item">
          기록하기
        </Link>
        <Link href="/#" className="nav-item">
          이달의정산
        </Link>
        <Link href="/#" className="nav-item">
          내정보
        </Link>
      </div>
      <div className="signup-btn">
        <Link href="/#">회원가입</Link>
      </div>
    </div>
  );
}
