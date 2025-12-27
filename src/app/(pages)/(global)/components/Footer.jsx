import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import DetaljerSektion from "./DetaljerSektion";

const Footer = () => {
  return (
    <footer className=" bg-green1 grid grid-cols-1 grid-rows-1 max-h-[500px] mt-Acquaintances">
      <div className="w-full h-full overflow-hidden col-start-1 -col-end-1 row-start-1 -row-end-1 pointer-events-none">
        <DetaljerSektion
          style={"w-full h-full object-cover pointer-events-none"}
        ></DetaljerSektion>
      </div>
      <div className=" col-start-1 -col-end-1 row-start-1 -row-end-1 grid gap-BestFriend px-Casual2 py-Casual2 md:grid-cols-2 md:grid-rows-2 md:px-DistantAcquaintances">
        <Link href={"/"}>
          <Logo
            color="#07201d"
            style="w-[100%] max-w-[300px] h-auto justify-self-center md:col-start-1 md:justify-self-start"
          />
        </Link>
        <nav className="md:self-center md:col-start-2 md:row-start-1 md:row-end-3">
          <ul className="flex gap-Casual2 justify-center md:justify-self-end md:flex-col md:gap-Friend md:items-center">
            <li>
              <Link
                className="text-black hover:text-green3 hover:decoration-green3"
                href={"/"}
              >
                Hjem
              </Link>{" "}
            </li>
            <li>
              <Link
                className="text-black hover:text-green3 hover:decoration-green3"
                href={"/omos"}
              >
                Om os
              </Link>
            </li>
            <li>
              <Link
                className="text-black hover:text-green3 hover:decoration-green3"
                href={"/ydelser"}
              >
                Ydelser
              </Link>
            </li>
            <li>
              <Link
                className="text-black hover:text-green3 hover:decoration-green3"
                href={"/kontakt"}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
        <aside className="mt-DistantAcquaintances flex flex-wrap gap-Friend ml-Casual1 max-w-[650px] md:mt-[0] md:col-start-1 md:row-start-2 md:-row-end-1 md:ml-[0]">
          <Icon
            i="phone"
            color="bg-green3"
            label="Tlf:"
            text="+45 52 30 33 11"
            isRight={false}
          />
          <Icon
            i="email"
            color="bg-green3"
            label="Email:"
            text="mail@lindvigco.dk"
            isRight={false}
          ></Icon>
          <Icon
            i="card"
            color="bg-green3"
            label="CVR:"
            text="38841831"
            isRight={false}
          ></Icon>
        </aside>
        <p className="text-green3 pt-Casual3 text-center md:col-start-2 md:-row-start-1 md:text-right">
          © lindvig & Co – 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
