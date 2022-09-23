import React, { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

function PieChart({ data }) {
  //   const [chartData, setChartData] = useState({
  //     datasets: [],
  //   });
  const chartRef = useRef(null);
  const options = {
    plugins: {
      legend: { display: false },
    },
    elements: {
      bar: {
        borderRadius: 100,
        borderWidth: 5,
      },
    },
  };

  return (
    <Bar
      data={data}
      options={options}
      ref={chartRef}
      width={100}
      height={100}
    />
  );
}

export default PieChart;
