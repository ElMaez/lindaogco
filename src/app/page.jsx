import Info from "./(pages)/(global)/components/Info";

import KontaktInfo from "./components/KontaktInfo";
import Hero from "./components/Hero";

import { getForside, getOmOs, getYdelse } from "@/api/Api";

export default async function Home() {
  const forsideData = await getForside();
  const omOsData = await getOmOs();
  const ydelseData = await getYdelse();
  console.log("ydelseData", ydelseData, "omOsData", omOsData);

  return (
    <main className="col-start-1 col-end-2 row-start-1 gap-y-Acquaintances">
      <Hero forside={forsideData} />
      <Info
        h1="Vi har hjulpet andre med dette"
        Items={ydelseData}
        withContact={true}
        link="/ydelser"
      />
      <KontaktInfo />
      <Info
        h1="Om os"
        Items={omOsData}
        withContact={false}
        hasImg={true}
        link="/omos"
      />
    </main>
  );
}
