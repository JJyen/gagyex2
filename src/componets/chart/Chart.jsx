"use client";
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
import "./Chart.css";

export default function Chart({ labels }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
      },
    },

    // plugins: {
    //   legend: {
    //     position: "top",
    //     labels: {
    //       font: {
    //         size: 17,
    //       },
    //     },
    //   },
    // },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "4월",
        data: [10, 20, 30, 40, 70, 50],
        backgroundColor: "rgb(255, 226, 124, 0.7)",
      },
      {
        label: "5월",
        data: [50, 2, 40, 45, 80, 60],
        backgroundColor: "rgb(191, 109, 0, 0.7)",
      },
    ],
  };

  return (
    <div className="chart-container">
      <header className="chart-header">
        <h5>카테고리별 지출 미리보기</h5>
        <p>단위: %</p>
      </header>
      <main className="chart-box">
        <Bar options={options} data={data} />
      </main>
    </div>
  );
}
