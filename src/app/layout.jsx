import Logo from "./(pages)/(global)/components/Logo";
import "./globals.css";

import Link from "next/link";

export const metadata = {
  title: "Linda & Co",
  description: "Hjemmeside til Lindvig & Co",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className=" grid grid-cols-1">
        <header className=" max-h-fit col-start-1 row-start-1 z-10">
          <nav className=" h-fit grid grid-cols-[1fr_3fr_1fr] grid-rows-2 md:grid-rows-1 gap-y-BestFriend pt-Casual2">
            {/* Til Mobile */}
            <Logo
              color="#07201d"
              style="w-[100%] max-w-[500px] h-auto justify-self-center col-start-2 md:hidden"
            ></Logo>
            {/*            */}
            <ul className="flex gap-x-BestFriend justify-between md:gap-x-Casual2 md:justify-center md:items-center col-start-2 row-start-2 md:col-start-1 md:-col-end-1 tracking-wider">
              <li>
                <Link className="text-bodysize" href={"/"}>
                  Hjem
                </Link>
              </li>
              <li>
                <Link className="text-bodysize " href={"/omos"}>
                  Om os
                </Link>
              </li>
              <Logo
                color="#07201d"
                style="w-[100%] max-w-[500px] h-auto justify-self-center col-start-2 row-start-1 row-end-2 hidden md:block md:mx-Casual1"
              ></Logo>
              <li>
                <Link className="text-bodysize" href={"/ydelser"}>
                  Ydelse
                </Link>
              </li>
              <li>
                <Link className="text-bodysize" href={"/kontakt"}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
