import Info from "./(pages)/(global)/components/Info";

import { YdelseListe } from "@/api/YdelseListe";
import { OmosListe } from "@/api/OmosListe";
import KontaktInfo from "./components/KontaktInfo";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="col-start-1 col-end-2 row-start-1 gap-y-Acquaintances">
      <Hero />
      <Info
        h1="Vi har hjulpet andre med dette"
        Items={YdelseListe}
        withContact={true}
      />
      <KontaktInfo />
      <Info h1="Om os" Items={OmosListe} withContact={false} />
    </main>
  );
}
