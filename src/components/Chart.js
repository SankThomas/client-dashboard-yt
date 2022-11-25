import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const state = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "",
      backgroundColor: "hsl(10, 79%, 65%)",
      hoverBackgroundColor: "hsl(186, 34%, 60%)",
      borderRadius: 8,
      data: [18, 35, 50, 30, 23, 43, 25],
    },
  ],
};

export default function Chart() {
  return <Bar data={state} />;
}
