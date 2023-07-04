"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { bookingplanning } from "@/data/test";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Bars() {
  const options = {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        // max: 100,
        stacked: true,
      },
      x: {
        stacked: true,
        // ticks: { color: "rgba(0, 220, 195)" },
      },
    },
  };
  const bookingType = ["NUEVA", "QQD", "TOTAL"];
  const planningDataAMS = bookingplanning.find(
    (item) => item.destination === "AMS"
  );
  const planningDataMIA = bookingplanning.find(
    (item) => item.destination === "MIA"
  );
  const planningDataCNX = bookingplanning.find(
    (item) => item.destination === "CNX"
  );
  const planningDataSUR = bookingplanning.find(
    (item) => item.destination === "SUR"
  );
  const dataAMS = [
    planningDataAMS?.newBooking,
    planningDataAMS?.QQD,
    planningDataAMS?.totalBooking,
  ];
  const dataMIA = [
    planningDataMIA?.newBooking,
    planningDataMIA?.QQD,
    planningDataMIA?.totalBooking,
  ];
  const dataCNX = [
    planningDataCNX?.newBooking,
    planningDataCNX?.QQD,
    planningDataCNX?.totalBooking,
  ];
  const dataSUR = [
    planningDataSUR?.newBooking,
    planningDataSUR?.QQD,
    planningDataSUR?.totalBooking,
  ];

  const data = {
    labels: bookingType,
    datasets: [
      {
        label: "AMS",
        data: dataAMS,
        backgroundColor: "rgba(146, 205, 219, 1)",
      },
      {
        label: "MIA",
        data: dataMIA,
        backgroundColor: "rgba(194, 214, 155, 1)",
      },
      {
        label: "CNX",
        data: dataCNX,
        backgroundColor: "rgba(217, 149, 148, 1)",
      },
      {
        label: "SUR",
        data: dataSUR,
        backgroundColor: "rgba(78, 129, 188, 1)",
      },
    ],
  };

  return <Bar data={data} options={options} />;
}
