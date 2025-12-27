import { FormularListe } from "@/api/FormularListe";
import Button from "../(global)/components/Button";
import Icon from "../(global)/components/Icon";

export default function Kontakt() {
  return (
    <main className="col-start-1 col-end-2 row-start-2 h-fit">
      <section aria-labelledby="kontakt-heading" className="grid gap-Casual1">
        <h1
          id="kontakt-heading"
          className="h-[90px] md:col-start-1 md:row-start-1"
        >
          Kontakt
        </h1>
        <form
          action="/api/contact"
          method="post"
          className="grid justify-items-center md:col-start-1 md:row-start-2"
        >
          <p>Bliv kontaktet af os</p>
          <fieldset className="justify-items-center grid gap-Friend">
            <legend className="sr-only">Bliv kontaktet af os</legend>
            {FormularListe.map((item) => {
              return (
                <div key={item.id} className="flex flex-col">
                  <label label={item.label}>{item.label}</label>
                  <input
                    type={item.type}
                    id={item.id}
                    name={item.label}
                    placeholder={item.placeholder}
                    required={item.required}
                    className={`w-[200px] md:w-[400px] h-[30px] rounded-xs outline-2  pl-BestFriend py-DieForYou ${
                      item.required ? `outline-Error` : `outline-black`
                    }`}
                  />
                </div>
              );
            })}
            <button
              className={`mt-Casual1 text-center w-[125px] py-BestFriend bg-green3 border-2 border-green3 rounded-xs text-white  hover:bg-green2 hover:border-green2 hover:text-black font-normal button tracking-wide`}
            >
              Send
            </button>
          </fieldset>
        </form>
        <div className="relative h-full overflow-hidden rounded-md md:col-start-2 md:row-start-2 md:row-end-4 bg-black">
          <video
            className="absolute inset-0 w-full h-full object-cover object-[60%_35%]"
            src="/assets/short.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className=" grid justify-items-center w-full gap-Friend md:col-start-1 md:pt-Acquaintances md:row-start-3">
          <p>Kontakt Os</p>
          <aside className="grid md:gap-DistantAcquaintances md:grid-cols-2 w-full">
            <Icon
              i="phone"
              color="bg-green1"
              text="+45 52 30 33 11"
              isRight={false}
            ></Icon>
            <Icon
              i="email"
              color="bg-green1"
              text="mail@lindvigco.dk"
              isRight={true}
            ></Icon>
          </aside>
        </div>
      </section>
    </main>
  );
}
