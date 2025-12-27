"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const Header = () => {
  const pathname = usePathname();
  const linkClass = (href) =>
    `text-bodysize transition-all duration-200 ${
      pathname === href
        ? "underline underline-offset-4 decoration-2 decoration-green1"
        : ""
    }`;
  return (
    <header className=" max-h-fit col-start-1 row-start-1 z-10 ">
      <nav className="  h-fit grid grid-cols-[1fr_3fr_1fr] grid-rows-2 md:grid-rows-1 gap-y-BestFriend pt-Casual2">
        {/* Til Mobile */}
        <div className="w-full max-w-[500px] h-auto justify-self-center col-start-2 md:hidden leading-Friend">
          <p className="text-h6size md:hidden justify-self-center">
            Administration og regnskab
          </p>
          <Logo
            color="#07201d"
            href="/"
            style="w-[100%] max-w-[500px] h-auto"
          ></Logo>
        </div>
        {/*            */}
        <ul className="flex gap-x-BestFriend justify-between md:gap-x-Casual2 md:justify-center md:items-center col-start-2 row-start-2 md:col-start-1 md:-col-end-1 tracking-wider">
          <li>
            <Link className={`text-bodysize ${linkClass("/")}`} href={"/"}>
              Hjem
            </Link>
          </li>
          <li>
            <Link
              className={`text-bodysize ${linkClass("/omos")}`}
              href={"/omos"}
            >
              Om os
            </Link>
          </li>
          <li className="leading-DieForYou">
            <p className="pl-[85px] hidden md:block w-full max-w-[500px]">
              Administration & regnskab
            </p>
            <Link href="/">
              <Logo
                color="#07201d"
                style="w-full max-w-[500px] h-auto justify-self-center col-start-2 row-start-1 row-end-2 hidden md:block md:mx-Casual1"
              ></Logo>
            </Link>
          </li>
          <li>
            <Link
              className={`text-bodysize ${linkClass("/ydelser")}`}
              href={"/ydelser"}
            >
              Ydelse
            </Link>
          </li>
          <li>
            <Link
              className={`text-bodysize ${linkClass("/kontakt")}`}
              href={"/kontakt"}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
