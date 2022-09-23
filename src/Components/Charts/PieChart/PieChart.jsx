import React, { useEffect, useRef, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ data }) {
  //   const [chartData, setChartData] = useState({
  //     datasets: [],
  //   });
  const chartRef = useRef(null);
  const options = {
    plugins: {
      legend: { position: "bottom" },
    },
  };
  const htmlLegendPlugin = {
    id: "htmlLegend",
    afterUpdate(chart) {
      const items = chart.options.plugins.legend.labels.generateLabels(chart);
      const ul = document.createElement("ul");
      items.forEach((item) => {
        const li = document.createElement("li");
        const boxSpan = document.createElement("span");
        boxSpan.style.background = item.fillStyle;
        li.appendChild(boxSpan);
        li.appendChild(document.createTextNode(item.text));
        ul.appendChild(li);
      });
      const jsLegend = document.getElementById("js-legend");
      jsLegend.appendChild(ul);
    },
  };

  return (
    <Pie
      data={data}
      options={options}
      ref={chartRef}
      plugins={htmlLegendPlugin}
    />
  );
}

export default PieChart;
