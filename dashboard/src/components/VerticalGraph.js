import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div style={{ width: '100%', height: '400px', maxWidth: '800px', margin: '20px auto' }}>
      <Bar options={options} data={data} />
    </div>
  );
}
