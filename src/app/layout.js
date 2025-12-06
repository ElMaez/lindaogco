import "./globals.css";
import Image from "next/image";
import Logo from "../assets/Logo.png";

export const metadata = {
  title: "Linda & Co",
  description: "Hjemmeside til Lindvig & Co",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <header className="grid grid-cols-[3fr_1fr] --space-1">
          <Image
            alt="Lindvig & Co logo"
            className=""
            src={Logo}
            width={500}
            height={500}
          ></Image>
        </header>
        {children}
      </body>
    </html>
  );
}
