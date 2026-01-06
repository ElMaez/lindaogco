import { getYdelseText } from "@/api/Api";
import Info from "../(global)/components/Info";

export default async function Ydelser() {
  const ydelseTextData = await getYdelseText();
  return (
    <main className="col-start-1 col-end-2 row-start-2 ">
      <Info
        h1="Service"
        Items={ydelseTextData}
        withContact={false}
        hasImg={false}
        isYdelse={true}
      />
    </main>
  );
}
