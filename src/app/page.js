import Info from "./(pages)/(global)/components/Info";
import Kontakt from "./(pages)/forside/components/Kontakt";
import { YdelseListe } from "@/api/YdelseListe";
import { OmosListe } from "@/api/OmosListe";
import Hero from "./(pages)/forside/components/Hero";

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
