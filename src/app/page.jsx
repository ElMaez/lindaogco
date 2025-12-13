import Info from "./(pages)/(global)/components/Info";

import { YdelseListe } from "@/api/YdelseListe";
import { OmosListe } from "@/api/OmosListe";
import Kontakt from "./components/Kontakt";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="col-start-1 col-end-2 row-start-1 gap-y-Acquaintances">
      <Hero />
      <Info Items={YdelseListe} withContact={true} />
      <Kontakt />
      <Info Items={OmosListe} withContact={false} />
    </main>
  );
}
