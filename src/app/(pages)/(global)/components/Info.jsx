"use client";
import Link from "next/link";
import { useState } from "react";

import Icon from "./Icon";

const Info = ({ h1, Items, withContact }) => {
  const items = Items;

  const [titel, setTitel] = useState(items[0]?.titel || "");
  const [info, setListItems] = useState(items[0]?.info || []);
  const [active, setActive] = useState(items[0]?.activeId || "");

  function handleYdelse({ titel, info, activeId }) {
    setTitel(titel); // set the title
    setListItems(info); // set the list
    setActive(activeId);
  }

  return (
    <article className="grid gap-Casual1 md:gap-Casual3">
      <h1 className="text-h1size leading-Acquaintances">{h1}</h1>
      <section className="md:min-w-[600px] grid md:grid-cols-[2fr_1fr] md:grid-rows-1 justify-self-center gap-Casual1 md:gap-Casual3">
        <div>
          <h5 id="titel">{titel}</h5>
          {Array.isArray(info) ? (
            <ul
              id="list"
              className="md:pl-Casual3 pt-BestFriend list-disc justify-self-center md:justify-self-center md:col-start-1"
            >
              {info.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="max-w-[55ch] md:pl-Casual3">{info}</p>
          )}
          <li className="pt-[10px] list-none">
            <Link href="/ydelser">Læs mere ...</Link>
          </li>
        </div>
        <ul className="flex gap-Friend flex-wrap md:flex-col pt-Casual1 row-start-1 md:col-start-2">
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
      {withContact ? (
        <aside className="grid gap-DistantAcquaintances pt-Casual3 md:grid-cols-2 min-w-full max-w-[500px] md:justify-self-center">
          <Icon i="phone" text="+45 52 30 33 11" isRight={false}></Icon>
          <Icon i="email" text="mail@lindvigco.dk" isRight={true}></Icon>
        </aside>
      ) : (
        ""
      )}
    </article>
  );
};

export default Info;
