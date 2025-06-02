import "@/styles/globals.css";
import Header from "@/componets/header/Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
