"use client";

import { FormularListe } from "@/api/FormularListe";
import Icon from "../(global)/components/Icon";

import { useForm } from "react-hook-form";

export default function Kontakt() {
  const needed = "needed";
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, submitCount },
  } = useForm();

  function onSubmit(data) {
    console.log("Form data:", data);
  }
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
          onSubmit={handleSubmit(onSubmit, (formErrors) => {
            console.log("Submit errors:", formErrors);
          })}
          noValidate
          className="grid justify-items-center md:col-start-1 md:row-start-2"
        >
          <p>Bliv kontaktet af os</p>
          <fieldset className="justify-items-center grid gap-Friend">
            <legend className="sr-only">Bliv kontaktet af os</legend>
            {FormularListe.map((item) => {
              const hasError = submitCount > 0 && errors[item.id];
              return (
                <div key={item.id} className="flex flex-col">
                  <label htmlFor={item.id}>{item.label}</label>

                  {item.type === "textarea" ? (
                    <textarea
                      id={item.id}
                      placeholder={item.placeholder}
                      {...register(item.id, {
                        ...item.validation,
                        ...(item.type === "number" && { valueAsNumber: true }),
                      })}
                      className={`w-[200px] md:w-[400px] h-[100px] rounded-xs border-2 pl-BestFriend py-DieForYou border-black`}
                    />
                  ) : (
                    <input
                      id={item.id}
                      type={item.type}
                      placeholder={item.placeholder}
                      {...register(item.id, {
                        ...item.validation,
                        ...(item.type === "number" && { valueAsNumber: true }),
                      })}
                      className={`w-[200px] md:w-[400px] h-[30px] rounded-xs border-2 pl-BestFriend py-DieForYou ${
                        hasError ? `border-${needed}` : "border-black"
                      }`}
                    />
                  )}

                  {hasError && (
                    <span className={`text-${needed}`}>
                      {errors[item.id].message}
                    </span>
                  )}
                </div>
              );
            })}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-Casual1 text-center w-[125px] py-BestFriend bg-green3 border-2 border-green3 rounded-xs text-white  hover:bg-green2 hover:border-green2 hover:text-black font-normal button tracking-wide`}
            >
              {isSubmitting ? "Sender..." : "Send"}
            </button>
          </fieldset>
        </form>
        <div className="relative h-full overflow-hidden rounded-md md:col-start-2 md:row-start-2 md:row-end-4">
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
