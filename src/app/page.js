import Image from "next/image";

import Hero from "../assets/Hero.png";
import DetaljerV from "./(pages)/(global)/components/DetaljerV";
import DetaljerH from "./(pages)/(global)/components/DetaljerH";
import Button from "./(pages)/(global)/components/Button";

export default function Home() {
  return (
    <main className="col-start-1 col-end-2 row-start-1">
      <div className="fullbleed h-screen bg-black grid grid-cols-[minmax(2rem,2fr)_minmax(0,50%)_minmax(0,50%)_minmax(2rem,2fr)] grid-rows-2">
        <Image
          alt="Billede af Linda & Camilla"
          className="fullbleed row-start-1 row-end-2 w-full h-screen object-[75%_100%] md:object-[75%_50%] object-cover "
          src={Hero}
          width={900}
          height={900}
        />

        <DetaljerV
          alt="Billede af matematiske tegn som detaljer på billede af Linda og Camilla"
          style="col-start-1 col-end-3 row-start-1 row-end-2 self-start w-full max-w-[300px] h-fit max-h-[500px] pt-Casual1 "
          src={Hero}
          width={900}
          height={900}
        />
        <DetaljerH
          alt="Billede af matematiske tegn som detaljer på billede af Linda og Camilla"
          style="-col-start-1 col-end-3 row-start-2 row-end-3 justify-self-end self-end w-fit max-w-full h-fit max-h-[500px] opacity-80"
          src={Hero}
          width={900}
          height={900}
        />
        <section className="col-start-2 col-end-4 row-start-2 row-end-3  self-center md:pl-Casual1 ">
          <h1 className="text-h2size leading-Casual3 md:leading-DistantAcquaintances md:text-h1size w-[15ch] max-w-full  text-white lg:text-black text-shadow-lg/95 md:text-shadow-md/95 lg:text-shadow-none font-bold ">
            Bruger du for mange timer på regnskabet?
          </h1>
          <p className="max-w-[25ch] md:min-w-full font-light md:font-semibold text-white lg:text-black text-shadow-[#030e0d] text-shadow-lg/95 md:text-shadow-sm/95 lg:text-shadow-none pt-BestFriend">
            Kom bare med opgaven – så får vi styr på det!
          </p>
          <div className="pt-Casual1 h-fit flex flex-col gap-Casual1 md:flex-row">
            <Button isPrimary={true} titel={"Kontakt os"}></Button>
            <Button isPrimary={false} titel={"Bliv Kontaktet"}></Button>
          </div>
        </section>
      </div>
      <h1>Hello World</h1>
      <h2>Hello World</h2>
      <h3>Hello World</h3>
      <h4>Hello World</h4>
      <h5>Hello World</h5>
      <h6>Hello World</h6>
      <p>Hello World</p>
    </main>
  );
}
