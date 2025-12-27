import { YdelseText } from "@/api/YdelseText";
import Info from "../(global)/components/Info";

export default function Ydelser() {
  return (
    <main className="col-start-1 col-end-2 row-start-2 ">
      <Info
        h1="Ydelser"
        Items={YdelseText}
        withContact={false}
        hasImg={false}
        isYdelse={true}
      />
    </main>
  );
}
