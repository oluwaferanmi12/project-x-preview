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

export default function DonutChart({
  values,
  colors,
  labels,
}: {
  values: number[];
  colors: string[];
  labels: string[];
}) {
  const total = values.reduce((sum, value) => sum + value, 0);
  const hasData = total > 0;

  const data = {
    labels,
    datasets: [
      {
        data: hasData ? values : [1],
        backgroundColor: hasData ? colors : ["#e5e7eb"],
        borderWidth: 0,
        spacing: hasData ? 4 : 0,
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
        enabled: hasData,
        callbacks: {
          label: (context: { label: string; parsed: number }) =>
            `${context.label}: ₦${context.parsed.toLocaleString("en-NG")}`,
        },
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
