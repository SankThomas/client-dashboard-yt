import React from "react";
import {
  AiOutlineArrowUp,
  AiOutlineCalendar,
  AiOutlineCreditCard,
} from "react-icons/ai";
import Chart from "../components/Chart";

export default function Overview() {
  return (
    <>
      <section className="max-width">
        <h1 className="mb-10">Welcome Back, Thomas</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="bg-white p-8 rounded shadow-lg">
            <button className="bg-emerald-100 p-2 shadow rounded-full">
              <AiOutlineCreditCard className="text-emerald-400" />
            </button>
            <h2 className="text-4xl mt-6 mb-4">$25,000</h2>
            <p>Starting budget</p>
          </article>

          <article className="bg-white p-8 rounded shadow-lg">
            <button className="bg-emerald-100 p-2 shadow rounded-full">
              <AiOutlineArrowUp className="text-emerald-400" />
            </button>
            <h2 className="text-4xl mt-6 mb-4">$5,030</h2>
            <p>Total spend</p>
          </article>

          <article className="bg-white p-8 rounded shadow-lg">
            <button className="bg-purple-100 p-2 shadow rounded-full">
              <AiOutlineCalendar className="text-purple-400" />
            </button>
            <h2 className="text-4xl mt-6 mb-4">21 June 2022</h2>
            <p>Launch date</p>
          </article>
        </div>

        <div className="mt-20 bg-white p-8 shadow-lg rounded">
          <Chart />
        </div>
      </section>
    </>
  );
}
