import React from "react";
import projects from "../images/projects.png";

export default function Project() {
  return (
    <>
      <section className="max-width">
        <h1>Project overview</h1>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="article">
            <h2 className="text-xl mb-10">Hi, Thomas</h2>
            <p>
              To the right, you'll find a live preview of your site. Please take
              some time to look it over, and submit your thoughts via the chat.
            </p>
            <p className="mt-6">You can check in for updates at any time.</p>
          </article>

          <article className="article lg:col-span-2">
            <img src={projects} alt="" />
          </article>
        </div>
      </section>
    </>
  );
}
