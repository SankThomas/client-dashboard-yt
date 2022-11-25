import React from "react";
import { BsChatLeftText } from "react-icons/bs";
import { IoAnalytics } from "react-icons/io5";
import { SiHotjar, SiNamecheap } from "react-icons/si";

export default function Apps() {
  return (
    <>
      <section className="max-width">
        <h1>Apps</h1>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="article flex items-start gap-6">
            <IoAnalytics className="text-orange-400 text-4xl" />
            <div>
              <h2 className="text-xl">Google Analytics</h2>
              <p>All-in-one site analytics</p>
            </div>
          </article>

          <article className="article flex items-start gap-6">
            <SiHotjar className="text-rose-400 text-4xl" />
            <div>
              <h2 className="text-xl">Hotjar</h2>
              <p>The visual way to understand your users</p>
            </div>
          </article>

          <article className="article flex items-start gap-6">
            <SiNamecheap className="text-rose-400 text-4xl" />
            <div>
              <h2 className="text-xl">Namecheap</h2>
              <p>Domain management and hosting</p>
            </div>
          </article>
        </div>

        <h2 className="mt-10 text-3xl lg:text-4xl">General</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="article flex items-start gap-6">
            <BsChatLeftText className="text-rose-400 text-4xl" />
            <div>
              <h2 className="text-xl">Chat</h2>
              <p>Customer support using modern messaging</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
