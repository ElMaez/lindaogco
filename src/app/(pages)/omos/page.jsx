import Info from "../(global)/components/Info";
import { OmosListe } from "@/api/OmosListe";

export default function Omos() {
  return (
    <main className="col-start-1 col-end-2 row-start-2 ">
      <Info
        h1=""
        Items={OmosListe}
        withContact={false}
        hasImg={true}
        isOmos={true}
      />
    </main>
  );
}
