import Image from "next/image";
import DetaljerH from "../(pages)/(global)/components/DetaljerH";
import DetaljerV from "../(pages)/(global)/components/DetaljerV";
import Button from "../(pages)/(global)/components/Button";

const Hero = () => {
  return (
    <div className="fullbleed h-screen bg-black grid grid-cols-[minmax(2rem,2fr)_minmax(0,50%)_minmax(0,50%)_minmax(2rem,2fr)] grid-rows-2">
      <Image
        alt="Billede af Linda & Camilla"
        className="fullbleed row-start-1 row-end-2 w-full h-screen object-[75%_100%] md:object-[75%_50%] object-cover "
        src={"/assets/heroPic.png"}
        width={1920}
        height={1500}
        loading="eager"
      />
      <DetaljerV
        alt="Billede af matematiske tegn som detaljer på billede af Linda og Camilla"
        style="col-start-1 col-end-3 row-start-1 row-end-2 self-start w-full max-w-[300px] h-fit max-h-[500px] pt-Casual1 "
        width={900}
        height={900}
      />
      <DetaljerH
        alt="Billede af matematiske tegn som detaljer på billede af Linda og Camilla"
        style="-col-start-1 col-end-3 row-start-2 row-end-3 justify-self-end self-end w-fit max-w-full h-fit max-h-[500px] opacity-80"
        width={900}
        height={900}
      />
      <section className="col-start-2 col-end-4 row-start-2 row-end-3  self-center md:pl-Casual1 ">
        <h1 className="text-h2size leading-Casual3 md:leading-DistantAcquaintances md:text-h1size w-[15ch] max-w-full  text-white lg:text-black text-shadow-sm/60 md:text-shadow-md/95 lg:text-shadow-none font-bold tracking-wide">
          Bruger du for mange timer på regnskabet?
        </h1>
        <p className="max-w-[25ch] md:min-w-full font-light md:font-semibold text-white lg:text-black text-shadow-[#030e0d] text-shadow-md/60 md:text-shadow-xs/95 lg:text-shadow-none pt-BestFriend tracking-wide">
          Kom bare med opgaven – så får vi styr på det!
        </p>
        <div className="pt-Casual1 h-fit flex flex-col gap-Casual1 md:flex-row">
          <Button
            isPrimary={true}
            isForside={true}
            titel={"Kontakt os"}
          ></Button>
          <Button
            isPrimary={false}
            isForside={true}
            titel={"Bliv kontaktet"}
          ></Button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
