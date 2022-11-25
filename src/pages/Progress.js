import React, { useState } from "react";

const data = [
  {
    title: "Define",
    desc: "Now seven world think timed while her. Spoil large oh he rooms on since an. Am up unwilling eagerness perceived incommode.",
    date: "Due Date: Feb 10th",
  },
  {
    title: "Research",
    desc: "Are not windows set luckily musical hundred can. Collecting if sympathize middletons be of of reasonably. Horrible so kindness at thoughts exercise no weddings subjects.",
    date: "Due Date: March 10th",
  },
  {
    title: "Ideation",
    desc: "The mrs gay removed towards journey chapter females offered not. Led distrusts otherwise who may newspaper but. Last he dull am none he mile hold as.",
    date: "Due Date: April 10th",
  },
  {
    title: "Prototyping",
    desc: "Improve him believe opinion offered met and end cheered forbade. Friendly as stronger speedily by recurred. Son interest wandered sir addition end say.",
    date: "Due Date: May 10th",
  },
  {
    title: "Testing",
    desc: "Manners beloved affixed picture men ask. Explain few led parties attacks picture company. On sure fine kept walk am in it. Resolved to in believed desirous unpacked weddings together.",
    date: "Due Date: June 10th",
  },
];

export default function Progress() {
  const [items] = useState(data);
  const [value, setValue] = useState(0);

  const { title, desc, date } = items[value];

  return (
    <>
      <section className="max-width">
        <h1>Progress</h1>

        <ul className="article flex items-center gap-6 flex-wrap my-8 md:justify-between">
          {items.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => setValue(index)}
                className={`shadow py-2 px-4 rounded hover:opacity-75 transition tracking-wide ${
                  index === value && "bg-blue-400 text-white font-bold"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <article className="article mb-8">
            <h2 className="text-2xl mb-3">{title}</h2>
            <p className="mb-5">{desc}</p>
            <small className="text-slate-600">{date}</small>
          </article>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <article className="article">
            <h2>What is a Rich Text Element?</h2>
            <p>
              Extremely we promotion remainder eagerness enjoyment an. Ham her
              demands removal brought minuter raising invited gay. Contented
              consisted continual curiosity contained get sex. Forth child dried
              in in aware do. You had met they song how feel lain evil near.
              Small she avoid six yet table china. And bed make say been then
              dine mrs. To household rapturous fulfilled attempted on so.
            </p>
          </article>

          <article className="article">
            <h2>In Progress: March 15th</h2>
            <p>
              You disposal strongly quitting his endeavor two settling him.
              Manners ham him hearted hundred expense. Get open game him what
              hour more part. Adapted as smiling of females oh me journey
              exposed concern. Met come add cold calm rose mile what. Tiled
              manor court at built by place fanny. Discretion at be an so
              decisively especially. Exeter itself object matter if on mr in.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
