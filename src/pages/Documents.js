import React from "react";
import { AiOutlineFileExcel, AiOutlineFileWord } from "react-icons/ai";
import { BsFileEarmarkPdf } from "react-icons/bs";

export default function Documents() {
  return (
    <>
      <section className="max-width">
        <h1>Documents</h1>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="article">
            <BsFileEarmarkPdf className="text-rose-400 text-6xl mb-5" />
            <h2 className="text-2xl mb-5">Proposal</h2>
            <p>
              Dolorum vitae earum assumenda in excepturi accusamus quidem
              maxime! Aut ipsa dolore quaerat dolorum labore ipsam molestias
              autem consequuntur quidem corrupti distinctio incidunt, quod
              aliquid at laboriosam inventore?
            </p>
            <small className="text-slate-600 mt-5 inline-block">
              27 January 2022
            </small>
          </article>

          <article className="article">
            <AiOutlineFileWord className="text-blue-400 text-6xl mb-5" />
            <h2 className="text-2xl mb-5">Terms</h2>
            <p>
              Dolorum vitae earum assumenda in excepturi accusamus quidem
              maxime! Aut ipsa dolore quaerat dolorum labore ipsam molestias
              autem consequuntur quidem corrupti distinctio incidunt, quod
              aliquid at laboriosam inventore?
            </p>
            <small className="text-slate-600 mt-5 inline-block">
              27 January 2022
            </small>
          </article>

          <article className="article">
            <AiOutlineFileExcel className="text-emerald-400 text-6xl mb-5" />
            <h2 className="text-2xl mb-5">Budget</h2>
            <p>
              Dolorum vitae earum assumenda in excepturi accusamus quidem
              maxime! Aut ipsa dolore quaerat dolorum labore ipsam molestias
              autem consequuntur quidem corrupti distinctio incidunt, quod
              aliquid at laboriosam inventore?
            </p>
            <small className="text-slate-600 mt-5 inline-block">
              27 January 2022
            </small>
          </article>

          <article className="article">
            <AiOutlineFileWord className="text-blue-400 text-6xl mb-5" />
            <h2 className="text-2xl mb-5">Contract</h2>
            <p>
              Dolorum vitae earum assumenda in excepturi accusamus quidem
              maxime! Aut ipsa dolore quaerat dolorum labore ipsam molestias
              autem consequuntur quidem corrupti distinctio incidunt, quod
              aliquid at laboriosam inventore?
            </p>
            <small className="text-slate-600 mt-5 inline-block">
              27 January 2022
            </small>
          </article>

          <article className="article">
            <AiOutlineFileExcel className="text-emerald-400 text-6xl mb-5" />
            <h2 className="text-2xl mb-5">Members</h2>
            <p>
              Dolorum vitae earum assumenda in excepturi accusamus quidem
              maxime! Aut ipsa dolore quaerat dolorum labore ipsam molestias
              autem consequuntur quidem corrupti distinctio incidunt, quod
              aliquid at laboriosam inventore?
            </p>
            <small className="text-slate-600 mt-5 inline-block">
              27 January 2022
            </small>
          </article>
        </div>
      </section>
    </>
  );
}
