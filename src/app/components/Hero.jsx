"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import DetaljerH from "../(pages)/(global)/components/DetaljerH";
import DetaljerV from "../(pages)/(global)/components/DetaljerV";
import Button from "../(pages)/(global)/components/Button";
import { useRef, useState } from "react";

const ROTATION_INTERVAL = 6000; // ms

const Hero = ({ forside }) => {
  const [index, setIndex] = useState(0);
  const started = useRef(false);

  const startRotation = () => {
    if (started.current) return;
    started.current = true;

    const rotate = () => {
      setIndex((prev) => (prev + 1) % forside.length);
      setTimeout(rotate, ROTATION_INTERVAL);
    };

    setTimeout(rotate, ROTATION_INTERVAL);
  };

  // start once
  if (!started.current) {
    startRotation();
  }

  return (
    <div className="fullbleed h-dvh mb-Acquaintances md:mb-[0] md:h-screen bg-black grid grid-cols-[minmax(2rem,2fr)_minmax(0,50%)_minmax(0,50%)_minmax(2rem,2fr)] grid-rows-12">
      <Image
        alt="Billede af Linda & Camilla"
        className="fullbleed row-start-1 row-end-2 w-full h-screen object-[75%_100%] md:object-[75%_50%] object-cover"
        src={"/assets/heroPic.png"}
        width={1920}
        height={1500}
        loading="eager"
      />

      <section className="col-start-2 col-end-4 row-start-6 -row-end-1 self-end pb-Casual1 md:row-start-8 md:row-end-11 md:self-center md:pl-Casual1 grid grid-cols-1 grid-row-2 z-10">
        <div className=" bg-black/50 lg:bg-white/20 w-fit rounded-md p-Friend row-start-1">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-h3size leading-Casual3 lg:leading-DistantAcquaintances lg:text-h1size w-full lg:w-[16ch] max-w-full text-white lg:text-black font-bold tracking-wide"
            >
              {forside[index].text}
            </motion.h1>
          </AnimatePresence>
          <p className="max-w-[30ch] md:min-w-full font-light md:font-semibold text-white lg:text-black pt-BestFriend tracking-wide">
            Kom bare med opgaven – så får vi styr på det!
          </p>
        </div>
        <div className="pt-Casual1 h-fit flex flex-row gap-Casual1 md:flex-row row-start-2">
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
      <DetaljerV
        alt="Billede af matematiske tegn som detaljer på billede af Linda og Camilla"
        style="col-start-1 col-end-3 row-start-1 row-end-2 md:row-start-2 md:row-end-2 self-start w-full max-w-[300px] h-fit max-h-[400px] pt-Casual1 "
        width={900}
        height={900}
      />
      <DetaljerH
        alt="Billede af matematiske tegn som detaljer på billede af Linda og Camilla"
        style="-col-start-1 col-end-3 row-start-7 -row-end-2 md:row-start-7 md:-row-end-1 justify-self-end self-end w-fit max-w-full h-fit max-h-[500px] opacity-80"
        width={900}
        height={900}
      />
    </div>
  );
};

export default Hero;
