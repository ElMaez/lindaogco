import Button from "../../(global)/components/Button";

const Kontakt = () => {
  return (
    <section className="grid justify-items-center bg-green1 fullbleed p-Casual2">
      <h1 className="text-center max-w-[20ch] leading-DistantAcquaintances">
        Du og jeg finder en løsning der passer dig
      </h1>
      <div className="pt-Casual1 h-fit flex flex-col gap-Casual1 md:flex-row">
        <Button isPrimary={true} titel={"Kontakt os"}></Button>
        <Button isPrimary={false} titel={"Bliv kontaktet"}></Button>
      </div>
    </section>
  );
};

export default Kontakt;
