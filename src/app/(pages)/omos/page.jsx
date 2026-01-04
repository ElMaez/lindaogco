import Info from "../(global)/components/Info";
import { getOmOs } from "@/api/Api";

export default async function Omos() {
  const omOsData = await getOmOs();
  return (
    <main className="col-start-1 col-end-2 row-start-2 ">
      <Info
        h1="Om os"
        Items={omOsData}
        withContact={false}
        hasImg={true}
        isOmos={true}
      />
    </main>
  );
}
