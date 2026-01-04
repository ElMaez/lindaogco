import Info from "./(pages)/(global)/components/Info";

import { YdelseListe } from "@/api/YdelseListe";
import { OmosListe } from "@/api/OmosListe";
import KontaktInfo from "./components/KontaktInfo";
import Hero from "./components/Hero";

import { getForside } from "@/api/Api";

export default async function Home() {
  const forsideData = await getForside();
  return (
    <main className="col-start-1 col-end-2 row-start-1 gap-y-Acquaintances">
      <Hero forside={forsideData} />
      <Info
        h1="Vi har hjulpet andre med dette"
        Items={YdelseListe}
        withContact={true}
        link="/ydelser"
      />
      <KontaktInfo />
      <Info
        h1="Om os"
        Items={OmosListe}
        withContact={false}
        hasImg={true}
        link="/omos"
      />
    </main>
  );
}
