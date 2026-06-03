"use client";

import { Container } from "@repo/ui";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {
  const data = {
    labels: ["Purple", "Pink", "Blue", "Gray"],
    datasets: [
      {
        data: [74, 8, 7, 11],
        backgroundColor: [
          "#af52de", // purple
          "#ff2d55", // pink/red
          "#007AFF", // blue
          "#595f85", // gray
        ],
        borderWidth: 0,
        spacing: 4,
        hoverOffset: 0,
        cutout: "48%",
        borderRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: 90, 
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Container as="div"
      style={{
        width: "100px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container as="div" style={{ width: "190px", height: "190px" }}>
        <Doughnut data={data} options={options} />
      </Container>
    </Container>
  );
}