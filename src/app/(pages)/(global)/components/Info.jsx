"use client";
import Link from "next/link";
import { useState } from "react";

import Icon from "./Icon";
import Image from "next/image";

const Info = ({ h1, Items, withContact, hasImg, link }) => {
  const items = Items;

  const [titel, setTitel] = useState(items[0]?.titel || "");
  const [info, setListItems] = useState(items[0]?.info || []);
  const [active, setActive] = useState(items[0]?.activeId || "");
  const [imgLink, setimgLink] = useState(items[0]?.imgLink || "");

  function handleYdelse({ titel, info, activeId, imgLink }) {
    setTitel(titel); // set the title
    setListItems(info); // set the list
    setActive(activeId);
    setimgLink(imgLink);
  }

  return (
    <article className="grid gap-Casual1 md:gap-Casual3">
      <h1 className="text-h1size leading-Acquaintances">{h1}</h1>

      {hasImg ? (
        <section className="md:min-w-[600px] grid md:grid-cols-[1fr_2fr_1fr] md:grid-rows-[40px_1fr] justify-self-center gap-Casual1 md:gap-x-Acquaintances">
          <h5 id="titel" className="col-start-1 ">
            {titel}
          </h5>
          <div className=" h-[200px] md:h-full overflow-hidden rounded-md col-start-1 row-start-2">
            <Image
              alt="Billede af Linda & Camilla"
              className="h-full object-cover object-[30%_0%] md:object-[40%_0%]"
              src={`${imgLink}`}
              width={1000}
              height={1000}
              priority
            />
          </div>
          {Array.isArray(info) ? (
            <ul
              id="list"
              className="md:pl-Casual3 pt-BestFriend list-disc justify-self-center md:justify-self-start md:col-start-2"
            >
              {info.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <div className="md:row-start-2 md:-row-end-1 md:col-start-2">
              <p className=" min-w-[25ch] max-w-[55ch] overflow-hidden line-clamp-10">
                {info}
              </p>

              <li className="pt-[10px] list-none">
                <Link href={link}>Læs mere ...</Link>
              </li>
            </div>
          )}

          <ul className="flex gap-Friend flex-wrap md:flex-col pt-Casual1 row-start-1 md:col-start-3 md:row-start-2 md:-row-end-1 ">
            {items.map((item, index) => {
              console.log("titel", item.titel, "info", item.info);
              return (
                <li key={index}>
                  <button
                    className={`link text-left md:pl-Acquaintances ${
                      active === `${item.activeId}` ? "selected" : ""
                    }`}
                    onClick={() =>
                      handleYdelse({
                        titel: `${item.titel}`,
                        info: item.info,
                        activeId: item.activeId,
                        imgLink: item.imgLink,
                      })
                    }
                  >
                    {item.titel}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
        <section className="md:min-w-[600px] grid md:grid-cols-[2fr_1fr] md:grid-rows-[1fr_3fr] justify-self-center gap-Casual1 md:gap-BestFriend">
          <h5 id="titel" className="md:col-start-1 md:row-end-2">
            {titel}
          </h5>
          {Array.isArray(info) ? (
            <ul
              id="list"
              className="md:pl-Casual3 list-disc justify-self-center md:justify-self-start md:col-start-1 md:srow-start-2"
            >
              {info.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="min-w-full max-w-[55ch] ">{info}</p>
          )}
          <li className="pt-[10px] list-none col-start-1">
            <Link href={link}>Læs mere ...</Link>
          </li>
          <ul className="flex gap-Friend flex-wrap md:flex-col pt-Casual1 row-start-1 md:-row-end-1 col-start-1 md:col-start-2">
            {items.map((item, index) => {
              console.log("titel", item.titel, "info", item.info);
              return (
                <li key={index}>
                  <button
                    className={`link text-left md:pl-Acquaintances ${
                      active === `${item.activeId}` ? "selected" : ""
                    }`}
                    onClick={() =>
                      handleYdelse({
                        titel: `${item.titel}`,
                        info: item.info,
                        activeId: item.activeId,
                      })
                    }
                  >
                    {item.titel}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {withContact ? (
        <aside className="grid gap-DistantAcquaintances pt-Casual3 md:grid-cols-2 min-w-full max-w-[500px] md:justify-self-center">
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
      ) : (
        ""
      )}
    </article>
  );
};

export default Info;
