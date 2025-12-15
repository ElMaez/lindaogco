import Button from "../(pages)/(global)/components/Button";
import DetaljerSektion from "../(pages)/(global)/components/DetaljerSektion";

const KontaktInfo = () => {
  return (
    <section className="grid grid-cols-1 grid-rows-1 bg-green1 fullbleed md:max-h-[750px]">
      <div className="grid justify-items-center p-Acquaintances col-start-1 -col-end-1 row-start-1 -row-end-1 h-fit">
        <div className="relative w-full max-w-[600px] max-h-[800px] aspect-video overflow-hidden rounded-md mb-Casual3">
          <video
            className="absolute inset-0 w-full h-full object-cover object-[60%_35%]"
            src="/assets/short.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <h1 className="text-center max-w-[20ch] leading-Casual3 text-h2size font-display font-bold md:text-h1size md:leading-DistantAcquaintances">
          Du og jeg finder en løsning der passer dig
        </h1>
        <aside className="pt-Casual1 h-fit flex flex-col gap-Casual1 md:flex-row">
          <Button isPrimary={true} titel={"Kontakt os"}></Button>
          <Button isPrimary={false} titel={"Bliv kontaktet"}></Button>
        </aside>
      </div>
      <div className=" w-full h-full overflow-hidden col-start-1 -col-end-1 row-start-1 -row-end-1 pointer-events-none">
        <DetaljerSektion
          style={"w-full h-full object-cover pointer-events-none"}
        />
      </div>
    </section>
  );
};

export default KontaktInfo;
